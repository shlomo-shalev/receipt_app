// Tools
import uuid from "uuid-random";
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

    if (file) {
      const type = file.type;

      fileData = {
        id: uuid(),
        name: file.name,
        type,
        base64: async function () : Promise<string> {
          return await RNFS.read(file.uri);
        },
        url: file.uri,
        dates: async function () : Promise<{lastModified: number, lastModifiedDate: Date}> {
          const stats = await RNFS.stat(file.uri);
          const date = stats.mtime;
      
          return {
              lastModified: new Date(date).getTime(),
              lastModifiedDate: new Date(date),
          };
        },
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