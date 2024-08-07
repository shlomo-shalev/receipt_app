// Tools
import React from 'react';
import uuid from "uuid-random";
import { launchImageLibrary } from 'react-native-image-picker';
import RNFS from 'react-native-fs';

// Base components
import Container from '../Container/reactnative';

export default function FileInput({children, classes = '', style = {}, onUpload, ...props}) {

  return (
   <Container
    {...props}
    classes={classes}
    onClick={async () => {
      const originalFiles = await launchImageLibrary({
        mediaType: 'photo',
        selectionLimit: 20,
      });

      let files = [];

      for (const key in originalFiles.assets) {        
        if (Object.prototype.hasOwnProperty.call(originalFiles.assets, key)) {
          const file = originalFiles.assets[key];

          
          const base64String = await RNFS.readFile(file.uri, 'base64');
          const stats = await RNFS.stat(file.uri);
          const dataURL = `data:${file.type};base64,${base64String}`;          

          files[key] = {
            id: uuid(),
            name: file.fileName,
            type: file.type,
            dataUrl: dataURL,
            url: file.uri,
            lastModified: new Date(stats.mtime).getTime(),
            lastModifiedDate: new Date(stats.mtime),
          }
        }
      }

      onUpload(files);
    }}
   >
    {children}
   </Container>
  );
};