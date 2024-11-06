// Tools
import uuid from "uuid-random";
import RNFS from 'react-native-fs';
import DocumentPicker from 'react-native-document-picker';

// Local interfaces
import { file, mainTypes } from "app/View/Bootstrap/Storage/File";

export async function save(name: string, data: string, type: string, path: string = '') : Promise<string|false>
{

    const url = `${RNFS.DocumentDirectoryPath}/${name}`;
    const cleanUrl = `/${name}`;
    const onlyPath = `${RNFS.DocumentDirectoryPath}`;
    var success = false;
    
    const base64Data = data.replace(/^data:image\/\w+;base64,/, '');
    
    const folderExists = await RNFS.exists(onlyPath);
    if (!folderExists && onlyPath !== RNFS.DocumentDirectoryPath) {
      await RNFS.mkdir(onlyPath);
    }

    try {
        await RNFS.writeFile(url, base64Data, 'base64')
        success = true;
    }
    catch(ex){
        console.log('ex', ex);
    }    

    return success ? cleanUrl : false;
}

export async function saveAs(
    { data, name, type = 'text/plain;charset=utf-8' }
    : { data: string, name: string, type?: string }
) : Promise<void>
{
    try {
        const res = await DocumentPicker.pickDirectory();
    
        const decodedUri = decodeURIComponent(res.uri);

        await RNFS.writeFile(`${decodedUri}/${name}`, data, 'utf8');

    } catch (err) {
        console.error(`${err}`);
    }
}

export async function get(url: string) : Promise<file>
{
    const uri = `${RNFS.DocumentDirectoryPath}${url}`;
    const name = (url.match(/\/[^\/]+$/)[0] || '').replace('/', '');
    const type = ((name.match(/[^.]+$/) || '')[0] || '');
    const mimeType = mainTypes[type] || 'unknown';
    
    const fileData: file = {
        id: uuid(),
        name,
        type: mimeType,
        base64: async function () : Promise<string> {
            return await RNFS.readFile(uri, 'base64');
        },
        url: uri,
        dates: async function () : Promise<{lastModified: number, lastModifiedDate: Date}> {
            const fileStat = await RNFS.stat(uri);
            const date = fileStat.mtime;

            return {
                lastModified: new Date(date).getTime(),
                lastModifiedDate: new Date(date),
            };
        },
    }

    return fileData;
}

export default {
    save,
    get,
    saveAs,
};