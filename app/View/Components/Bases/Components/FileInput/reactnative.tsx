// Tools
import React from 'react';
import uuid from "uuid-random";
import RNFS from 'react-native-fs';
import DocumentPicker from 'react-native-document-picker';

// Base components
import Container from '../Container/reactnative';

// Apis
import { requestOpenFilePremissition } from 'app/View/Hooks/File/drivers/reactnative';

const files = [
  DocumentPicker.types.pdf,
  DocumentPicker.types.doc,
  DocumentPicker.types.docx,
  DocumentPicker.types.csv,
]

const getType = (type): string => {
  // .pdf
  let newType: string = DocumentPicker.types.pdf;

  switch (type) {
    case '.doc':
      newType = DocumentPicker.types.doc;
      break;

    case '.docx':
      newType = DocumentPicker.types.docx;
      break;

    case '.csv':
      newType = DocumentPicker.types.csv;
      break;
  }

  return newType;
}

export default function FileInput({
  children, classes = '', style = {}, onUpload, 
  accept = 'files/*', multiple = false, ...props
}) {

  let types = accept === 'files/*' ? files : getType(accept);
  
  return (
   <Container
    {...props}
    classes={classes}
    onClick={async () => {

      try {
        const res = await DocumentPicker.pick({
          type: types,
        });        
        
        const uri = decodeURIComponent(res[0].uri);        

        await requestOpenFilePremissition();

        const base64String = await RNFS.readFile(uri, 'base64');
        
        const stats = await RNFS.stat(uri);
        const dataURL = `data:${res[0].type};base64,${base64String}`;

        const file = {
          id: uuid(),
          name: res[0].name,
          type: res[0].type,
          dataUrl: dataURL,
          url: uri,
          lastModified: new Date(stats.mtime).getTime(),
          lastModifiedDate: new Date(stats.mtime),
        }

        onUpload([file]);

      } catch (err) {
        if (!DocumentPicker.isCancel(err)) {
          throw err;
        }
      }
    }}
   >
    {children}
   </Container>
  );
};
