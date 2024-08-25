// Tools
import uuid from "uuid-random";
import { Buffer } from 'buffer';
import RNFS from 'react-native-fs';
import DocumentPicker from 'react-native-document-picker';

// interfaces
import { file } from "app/View/Bootstrap/Storage/File";

export async function pickfile() : Promise<file>
{
  let fileData: file = null;

  try {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.plainText],
      allowMultiSelection: false,
    });
  
    const file = res[0];
    let dataUrl = null;

    if (file) {
      const type = file.type;
      const fileInfo = await RNFS.stat(file.uri);
      const base64 = await RNFS.read(file.uri);

      const dataUrl = `data:${type};base64,${base64}`;    

      fileData = {
        id: uuid(),
        name: file.name,
        type,
        dataUrl,
        url: file.uri,
        lastModified: new Date(fileInfo.mtime).getTime(),
        lastModifiedDate: new Date(fileInfo.mtime),
      };

    }

  }
  catch(ex) {
    console.error(`${ex}`);
  }

  return fileData;
}

export default {
  pickfile,
};