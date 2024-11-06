// Tools
import React from 'react';
import uuid from "uuid-random";
import RNFS from 'react-native-fs';
import { launchImageLibrary } from 'react-native-image-picker';

// Base components
import Container from '../Container/reactnative';

export default function ImageInput({children, classes = '', style = {}, onUpload, ...props}) {

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

          files[key] = {
            id: uuid(),
            name: file.fileName,
            type: file.type,
            base64: async function () : Promise<string> {
              return await RNFS.readFile(file.uri, 'base64');
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