// Tools
import uuid from "uuid-random";
import RNFS from 'react-native-fs';
import PdfThumbnail from "react-native-pdf-thumbnail";

// Interfaces
import { file } from "app/View/Bootstrap/Storage/File";
import { PermissionsAndroid, Platform } from "react-native";

export async function convertPdfPagesToPhotos(file: file) 
{
  const files: file[] = [];

  try {
    const filePath = file.url;
    
    const page = 0;
    
    await requestOpenFilePremissition();

    await PdfThumbnail.generate(filePath, page, 100);

    const results = await PdfThumbnail.generateAllPages(filePath);

    for (const index in results) {
      if (Object.prototype.hasOwnProperty.call(results, index)) {
        const newFile = results[index];
        
        const url = decodeURIComponent(newFile.uri);

        const base64String = await RNFS.readFile(url, 'base64');
        const stats = await RNFS.stat(url);
        const dataURL = `data:${file.type};base64,${base64String}`;      

        const id = uuid();

        files.push({
          id,
          name: `${id}.pdf`,
          type: file.type,
          dataUrl: dataURL,
          url,
          lastModified: new Date(stats.mtime).getTime(),
          lastModifiedDate: new Date(stats.mtime),
        });
      }
    }

  } catch (error) {
    console.error('Error converting PDF to images:', `${error}`);
  }

  return files;
}

export async function requestOpenFilePremissition() {
  if (Platform.OS === 'android') {
    
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'Storage Permission',
        message: 'App needs access to your storage to select documents',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    
    if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
      throw Error('Permissions denied');
    }

  }
  return true;
}

export default {
  convertPdfPagesToPhotos,
};