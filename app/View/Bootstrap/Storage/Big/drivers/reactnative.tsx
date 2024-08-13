import SQLite from 'react-native-sqlite-storage';

var DB = null;

export async function openDB () {
    return new Promise((res, rej) => {
        if (!DB) {
            SQLite.openDatabase(
                {
                    name: 'app', 
                    location: 'default'
                },
                (originalDB) => {
                    DB = originalDB;
                    res(DB);
                },
                err => rej(err),
            );
        }
        else {
            res(DB);
        }
    });
}

function getColumnsQuery(columns: {name: string, type: string}[]) {
    let columnsQueryMap = columns.map(column => {
        return `${column.name} ${column.type}`;
    });
    const columnsQuery = columnsQueryMap.join(' , ');
    
    return columnsQuery;
}

function getListDataQuery(columns: {name: string, type: string}[]) {
    let listDataQueryMap = columns.map(column => {
        return `?`;
    });
    const listDataQuery = listDataQueryMap.join(' , ');
    
    return listDataQuery;
}

export function createTable(name: string, columns: {name: string, type: string}[]) {
    return new Promise((res, rej) => {
        const columnsQuery = getColumnsQuery(columns);

        DB.executeSql(
            `
                CREATE TABLE IF NOT EXISTS ${name} 
                (id INTEGER PRIMARY KEY AUTOINCREMENT, ${columnsQuery})
            `,
            [],
            () => res(true),
            err => rej(err),
        );
    });
}

export function getData({
    table, size = 10, page = 1, order = 'asc'
}) {
    return new Promise((res, rej) => {
        const localSkip = (page - 1) * size;
        const localSize = size * 1;

        DB.executeSql(
            `
                SELECT * 
                FROM ${table} 
                ORDER BY id ${order}
                LIMIT ${localSkip}, ${localSize}
            `,
            [],
            (tx) => {
                const len = tx.rows.length;
                let data = [];

                for (let i = 0; i < len; i++) {
                    data.push(tx.rows.item(i));
                }
                                
                res(data);
            },
            err => rej(err),
            
        );
    });
}

export function save(table: string, data: object) {
    return new Promise((res, rej) => {
        let columns = [];
        let finalData = [];

        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                const value = data[key];
                
                columns.push(key);
                finalData.push(value);
            }
        }

        const listDataQuery = getListDataQuery(columns);
        const columnsQuery = columns.join(' , ');

        DB.executeSql(
            `INSERT INTO ${table} (${columnsQuery}) VALUES (${listDataQuery})`,
            finalData,
            (data) => res(data.insertId),
            err => rej(err),
        );
    });
}

export default {
    openDB,
    createTable,
    save,
    getData,
};