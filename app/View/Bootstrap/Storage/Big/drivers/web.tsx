export async function openDB () {

}

export function createTable(name: string, columns: {name: string, type: string}[]) {
    
}

export function save(table: string, data: object) {
}

export function getData(table: string, size = 10, page = 1) {
}

export default {
    openDB,
    createTable,
    save,
    getData,
};