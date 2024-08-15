import { 
    openDB as baseOpenDB, 
    save as baseSave,
    getData as baseGetData,
} from "app/View/Bootstrap/Storage/Big/drivers/__DOM_DRIVER__"; 

export const openDB = baseOpenDB;
export const save = baseSave;
export const getData = baseGetData;

export default {
    openDB,
    save,
    getData,
};