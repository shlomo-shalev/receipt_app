// Tools
import RNFS from 'react-native-fs';

// Local interfaces
import { file } from '..';

export async function save(name: string, data: string, type: string, path: string = '') : Promise<string|false>
{

    const url = `${RNFS.DocumentDirectoryPath}${path}/${name}`;
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

    return success ? url : false;
}

export async function get(url: string) : Promise<file>
{
    return null;
}

export default {
    save,
    get,
};