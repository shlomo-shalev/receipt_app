import { 
    save as baseSave,
    get as baseGet,
    saveAs as baseSaveAs,
} from "app/View/Bootstrap/Storage/File/drivers/__DOM_DRIVER__"; 

export const save = baseSave;
export const saveAs = baseSaveAs;
export const get = baseGet;

export interface file {
    url: string;
    id: string | number;
    name: string;
    type: string;
    base64: () => Promise<string>;
    dates: () => Promise<{
        lastModified: number,
        lastModifiedDate: Date,
    }>;
}

export const mainTypes = {
    'mp4': 'video/mp4',
    'pdf': 'application/pdf',
    'csv': 'text/csv',
    'txt': 'text/plain',
    'png': 'image/png',
    'jpg': 'image/jpg',
    'jpeg': 'image/jpeg',
    'heic': 'image/heic',
    'heif': 'image/heif',
};

export default {
    save,
    get,
    saveAs,
    mainTypes,
};