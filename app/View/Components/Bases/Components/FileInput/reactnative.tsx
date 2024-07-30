// Tools
import React from 'react';
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
            name: file.fileName,
            type: file.type,
            dataUrl: dataURL,
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

const getMimeType = (filePath) => {
  const extension = filePath.split('.').pop().toLowerCase();
  const mimeTypes = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    gif: 'image/gif',
    bmp: 'image/bmp',
    webp: 'image/webp'
  };
  return mimeTypes[extension] || 'application/octet-stream';
};
