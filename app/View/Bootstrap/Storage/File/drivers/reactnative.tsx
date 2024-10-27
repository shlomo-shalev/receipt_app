// Tools
import uuid from "uuid-random";
import RNFS from 'react-native-fs';
import DocumentPicker from 'react-native-document-picker';

// Local interfaces
import { file } from "app/View/Bootstrap/Storage/File";

export async function save(name: string, data: string, type: string, path: string = '') : Promise<string|false>
{

    const url = `${RNFS.DocumentDirectoryPath}${path}/${name}`;
    const cleanUrl = `${path}/${name}`;
    const onlyPath = `${RNFS.DocumentDirectoryPath}${path}`;
    var success = false;

    const folderExists = await RNFS.exists(onlyPath);
    if (!folderExists) {
      await RNFS.mkdir(onlyPath);
    }

    try {
        await RNFS.writeFile(url, data, 'utf8')
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
    let file = null, date = null;
    const uri = `${RNFS.DocumentDirectoryPath}${url}`;

    try {
        file = await RNFS.read(uri);
        const fileStat = await RNFS.stat(uri);
        date = fileStat.mtime;
    }
    catch(ex){
        console.error(`${ex}`);
    }

    let fileData = null;
        
    if (file) {        
        const type = ((file.match(/^data:.+;/) || '')[0] || '')
            .replace('data:', '')
            .replace(';', '');

        fileData = {
            id: uuid(),
            name: (url.match(/\/[^\/]+$/)[0] || '').replace('/', ''),
            type,
            dataUrl: file,
            url: file,
            lastModified: new Date(date).getTime(),
            lastModifiedDate: new Date(date),
        }
    }

    return fileData;
}

export default {
    save,
    get,
    saveAs,
};