// Tools 
import uuid from "uuid-random";

// Interfaces
import { file } from "app/View/Bootstrap/Storage/File";
import { createLocalurl, dataURItoBlob } from "app/Models/Blob/Blob";

export async function pickfile({  }) : Promise<file>
{
  const accept = 'text/plain';
  const result = await new Promise((res, rej) => {
    let fileData: file = null;

    const input = document.createElement('input');
    input.type = 'file';
    input.accept = accept;
    input.style.display = 'none';

    input.onchange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = (e) => {
        fileData = {
          id: uuid(),
          type: file.type,
          name: file.name,
          dataUrl: `${e.target.result}`,
          url: createLocalurl(dataURItoBlob(e.target.result)),
          lastModified: file.lastModified,
          lastModifiedDate: new Date(file.lastModified),
        };
        res(fileData);
      };
  
      reader.onerror = err => {
        rej(err);
      }
  
      reader.readAsText(file);
    };
  
    input.click();
  });

    return typeof result === 'string' ? null : result as file;
}

export default {
    pickfile,
};