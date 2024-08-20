import { 
    save as baseSave,
    get as baseGet,
} from "app/View/Bootstrap/Storage/File/drivers/__DOM_DRIVER__"; 

export const save = baseSave;
export const get = baseGet;

export interface file {
    url: string;
    id: string | number;
    name: string;
    type: string;
    dataUrl: string;
    lastModified: number,
    lastModifiedDate: Date;
}

export default {
    save,
    get,
};