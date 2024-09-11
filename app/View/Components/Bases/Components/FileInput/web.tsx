// Tools
import React from 'react';
import uuid from "uuid-random";

// Base components
import Container from '../Container/web';
import { dataURItoBlob } from 'app/Models/Blob/Blob';

export default function FileInput({
    children, classes = '', style = {}, onUpload, 
    accept = 'files/*', multiple = false, ...props
}) {

  return (
   <Container
    {...props}
    classes={classes}
    onClick={async () => {
      const files = await pickFile({ accept, multiple });

      onUpload(files);
    }}
   >
    {children}
   </Container>
  );
};

export async function pickFile({ accept, multiple }) : Promise<Array<Object>> {
  const inputElemenet = document.createElement('input');
  inputElemenet.style.display = 'none';
  inputElemenet.type = 'file';
  inputElemenet.accept = accept;
  inputElemenet.multiple = multiple;

  return new Promise((res, rej) => {
    const teardown = () => {
      document.body.removeEventListener('focus', teardown, true);
      setTimeout(() => {
          document.body.removeChild(inputElemenet);
          res([]);
      }, 1000);
    }

    document.body.addEventListener('focus', teardown, true);
    document.body.appendChild(inputElemenet);

    inputElemenet.addEventListener('change', async () => {
      if (inputElemenet.files) {
          let files = [];

          for (let key in inputElemenet.files) {
            if (Object.prototype.hasOwnProperty.call(inputElemenet.files, key)) {
              const file = inputElemenet.files[key];

              const dataUrl = await fileToDataUrl(file);

              files[key] = {
                id: uuid(),
                name: file.name,
                type: file.type,
                dataUrl,
                url: URL.createObjectURL(dataURItoBlob(dataUrl)),
                lastModified: file.lastModified,
                lastModifiedDate: new Date(file.lastModified),
              };
            }
            
          }

          res(files);          
      }
    });

    inputElemenet.click();
  });
}

async function fileToDataUrl (file) : Promise<string | ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });  
}