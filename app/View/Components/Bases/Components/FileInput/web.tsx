// Tools
import React from 'react';

// Base components
import Container from '../Container/web';

export default function FileInput({children, classes = '', style = {}, onUpload, ...props}) {

  return (
   <Container
    {...props}
    classes={classes}
    onClick={async () => {
      const files = await pickFile();      

      onUpload(files);
    }}
   >
    {children}
   </Container>
  );
};

export async function pickFile() : Promise<Array<Object>> {
  const inputElemenet = document.createElement('input');
  inputElemenet.style.display = 'none';
  inputElemenet.type = 'file';
  inputElemenet.multiple = true;

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

              files[key] = {
                name: file.name,
                type: file.type,
                dataUrl: await fileToDataUrl(file),
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