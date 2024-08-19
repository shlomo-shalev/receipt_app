import { 
    openDB as baseOpenDB, 
    save as baseSave,
    getData as baseGetData,
    find as baseFind,
} from "app/View/Bootstrap/Storage/Big/drivers/__DOM_DRIVER__"; 

export const openDB = baseOpenDB;
export const save = baseSave;
export const getData = baseGetData;
export const find = baseFind;

export default {
    openDB,
    save,
    getData,
    find,
};