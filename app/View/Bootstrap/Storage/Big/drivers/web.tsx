const filesTable = {
    name: 'files',
    columns: [
        {
            name: 'name',
            type: 'varchar',
        },
        {
            name: 'path',
            type: 'TEXT',
        },
        {
            name: 'type',
            type: 'varchar',
        },
        {
            name: 'base64',
            type: 'TEXT',
        },
        {
            name: 'created_at',
            type: 'datetime',
        },
        {
            name: 'updated_at',
            type: 'datetime',
        },
    ],
};

async function openIndexedDB (onsuccess = null, onerror = null, onupgradeneeded = null)
{
    return new Promise(async (res, rej) => {
        if (typeof window !== 'undefined') {
            const request = indexedDB.open('app', 1);

            request.onupgradeneeded = onupgradeneeded || (() => {});
    
            request.onsuccess = (event) => {
                if (onsuccess) onsuccess(event, res, rej);
                else res(event.target.result);
            };
    
            request.onerror = (event) => {
                if (onerror) onerror(event, rej);
                else rej(event.target.error);
            };
        }
        else {
            res({});
        }
    });
}

export async function openDB (tables: {name: string, columns: {name: string, type: string}[]}[]) : Promise<string|boolean>
{
    return new Promise(async (res) => {
        await openIndexedDB(null, null, (event) => {
            createTables(event.target.result, [
                ...tables, 
                filesTable,
            ]);
        });
        res(true);
    });
}

async function createTables(db, tables: {name: string, columns: {name: string, type: string}[]}[])
{
    for (const table of tables) {
        await createTable(db, table.name, table.columns);
    }
}


async function createTable(db, name: string, columns: {name: string, type: string}[])
{
    if (!db.objectStoreNames.contains(name)) {
        const objectStore = db.createObjectStore(name, { keyPath: 'id', autoIncrement: true });
        for (const column of columns) {
            objectStore.createIndex(column.name, column.name, { unique: false });
        }
    }
}

export async function save(table: string, data: object) : Promise<string|number>
{
    const finalData = data;
    return new Promise(async (res, rej) => {
        const onsuccess = function(event, res, rej) {
            const db = event.target.result;

            const transaction = db.transaction(table, 'readwrite');
            const objectStore = transaction.objectStore(table);

            const addRequest = objectStore.add(finalData);

            addRequest.onsuccess = function(e) {
                res(e.target.result);
            };

            addRequest.onerror = function(e) {
                rej(e.target.error);
            };
        };

        const id = await openIndexedDB(onsuccess);
        
        res(parseInt(`${id}`));
    });
}

export async function update(table: string, id: number, data: object) : Promise<string|boolean>
{
    const finalData = {
        id, 
        ...data,
    };
    return new Promise(async (res, rej) => {
        const onsuccess = function(event, res, rej) {
            const db = event.target.result;

            const transaction = db.transaction(table, 'readwrite');
            const objectStore = transaction.objectStore(table);

            const addRequest = objectStore.put(finalData);

            addRequest.onsuccess = function(e) {
                res(e.target.result);
            };

            addRequest.onerror = function(e) {
                rej(e.target.error);
            };
        };

        await openIndexedDB(onsuccess);
        
        res(true);
    });
}

export async function getData({
    table, size = 10, page = 1, order = 'asc'
}) : Promise<any> 
{
    return new Promise(async (res, rej) => {
        const onsuccess = function(event, res, rej) {
            const db = event.target.result;

            const transaction = db.transaction(table, 'readonly');
            const objectStore = transaction.objectStore(table);

            const addRequest = objectStore.openCursor();

            const limit = size;
            const skip = (page - 1) * size;
            let counter = 0;
            const result = [];

            addRequest.onsuccess = function(e) {
                const cursor = e.target.result;

                if (cursor) {
                  if (counter >= skip && result.length < limit) {
                    result.push(cursor.value);
                  }
                  counter++;
                  if (result.length < limit) {
                    cursor.continue();
                  } else {
                    res(result);
                  }
                } else {
                    res(result);
                }
            };

            addRequest.onerror = function(e) {
                rej(e.target.error);
            };
        };

        const data = await openIndexedDB(onsuccess);
        
        res(data);
    });
}

export default {
    openDB,
    save,
    update,
    getData,
};