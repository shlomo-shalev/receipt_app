// Tools 
import uuid from "uuid-random";

// Interfaces
import { file } from "app/View/Bootstrap/Storage/File";
import { createLocalurl, dataURItoBlob } from "app/Models/Blob/Blob";

export async function pickfile() : Promise<file>
{
    let fileData: file = null;

    try {
        const options = {
          types: [
            {
              description: 'Text Files',
              accept: {
                'text/plain': ['.txt']
              }
            }
          ],
          multiple: false,
        };
    
        const [fileHandle] = await window.showOpenFilePicker(options);
    
        const file = await fileHandle.getFile();
        const dataUrl = await file.text();        

        fileData = {
            id: uuid(),
            name: file.name,
            type: file.type,
            dataUrl,
            url: createLocalurl(dataURItoBlob(dataUrl)),
            lastModified: file.lastModified,
            lastModifiedDate: new Date(file.lastModified),
        };
    
    } catch (ex) {
        console.error(`${ex}`);
    }

    return fileData;
}

export default {
    pickfile,
};