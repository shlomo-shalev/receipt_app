import SQLite from 'react-native-sqlite-storage';

var DB = null;

export async function openDB (tables: {name: string, columns: {name: string, type: string}[]}[]) : Promise<string|boolean>
{
    return new Promise((res, rej) => {
        if (!DB) {
            SQLite.openDatabase(
                {
                    name: 'app', 
                    location: 'default'
                },
                (originalDB) => {
                    DB = originalDB;
                    createTables(tables);
                    res(true);
                },
                err => rej(err),
            );
        }
        else {
            res(DB);
        }
    });
}

async function createTables(tables: {name: string, columns: {name: string, type: string}[]}[]) {
    for (const table of tables) {
        await createTable(table.name, table.columns);
    }
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

function preDoData(data) {
    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            const element = data[key];
            if (typeof element === 'object') {
                data[key] = JSON.stringify(element);
            }
        }
    }
    return data;
}

async function createTable(name: string, columns: {name: string, type: string}[]) : Promise<string|boolean>
{
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

export async function getData({
    table, size = 10, page = 1, order = 'asc',
    filter = {},
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

export async function getAll({ table }) : Promise<any> 
{
    return new Promise((res, rej) => {
        DB.executeSql(
            `
                SELECT * 
                FROM ${table}
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

export async function save(table: string, data: object) : Promise<string|number>
{
    return new Promise((res, rej) => {
        let columns = [];
        let finalData = [];

        const postData = preDoData(data);

        for (const key in postData) {
            if (Object.prototype.hasOwnProperty.call(postData, key)) {
                const value = postData[key];
                
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

export function update(table: string, id: number, data: object) : Promise<string|boolean>
{
    return new Promise((res, rej) => {
        let columns = [];
        let finalData = [];

        const postData = preDoData(data);

        for (const key in postData) {
            if (Object.prototype.hasOwnProperty.call(postData, key)) {
                const value = postData[key];
                
                columns.push(`${key} = ?`);
                finalData.push(value);
            }
        }

        const columnsQuery = columns.join(" , \n");

        DB.executeSql(
            `
                UPDATE ${table}
                SET ${columnsQuery}
                WHERE id = ?
            `,
            [...finalData, id],
            (data) => res(true),
            err => rej(err),
        );
    });
}

export async function find({
    table, id
}) : Promise<any> 
{
    
}

export default {
    openDB,
    save,
    update,
    getData,
    find,
    getAll,
};