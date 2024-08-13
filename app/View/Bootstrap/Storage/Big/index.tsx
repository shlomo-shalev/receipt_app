import { 
    openDB as baseOpenDB, 
    createTable as baseCreateTable,
    save as baseSave,
    getData as baseGetData,
} from "app/View/Bootstrap/Storage/Big/drivers/__DOM_DRIVER__"; 

export const openDB = baseOpenDB;
export const createTable = baseCreateTable;
export const save = baseSave;
export const getData = baseGetData;

export default {
    openDB,
    createTable,
    save,
    getData,
};