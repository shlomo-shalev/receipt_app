// Tools
import uuid from "uuid-random";
import RNFS from 'react-native-fs';
import { Linking, Platform } from 'react-native';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import Permissions, {PERMISSIONS} from 'react-native-permissions';

export function getFiles() {
    return {
        waitPullFiles: getList(),
    };
}

var filesCash = null;

export function openAppSettings () {
    Linking.openSettings()
}

async function getList() {
    let photosData = {edges: []};
    let status = 'allow';
    let files = [];

    if (!filesCash) {
      try {
        const allowPermission = await requestPermission(); 

        if (!allowPermission) {
            throw new Error('blocked');
        }        

        photosData = await CameraRoll.getPhotos({
            first: 20,
            assetType: 'Photos',
        });
      }
      catch (ex) {
          status = 'blocked';
      }

      for (const image of photosData.edges) {
        const url = image.node.image.uri;
        const type = `image/${image.node.image.extension}`;
        const file = {url, type: image.node.image.extension};
        
        const data = {
          id: uuid(),
          name: image.node.image.filename,
          type,
          base64: async function () : Promise<string> {
            return await getDataUrl(file);
          },
          url,
          dates: async function () : Promise<{lastModified: number, lastModifiedDate: Date}> {
            const stats = await getStats(file);
            const date = stats.mtime;

            return {
              lastModified: new Date(date).getTime(),
              lastModifiedDate: new Date(date),
            };
          },
        };

        files.push(data);
      }
      
      if (files.length > 0) {
        filesCash = files;
      }
    }
    else {
      files = filesCash;
    }
    
    return {
        files,
        status,
    };
}

async function requestPermission () {
    if (Platform.OS === 'ios') {
        const permission = await Permissions.check(PERMISSIONS.IOS.PHOTO_LIBRARY);
        if (
            permission === Permissions.RESULTS.GRANTED
            || permission === Permissions.RESULTS.LIMITED
        ) {
          return true;
        }

        const res = await Permissions.request(PERMISSIONS.IOS.PHOTO_LIBRARY);
        if (
            res === Permissions.RESULTS.GRANTED 
            || res === Permissions.RESULTS.LIMITED
        ) {
          return true;
        }

        if (res === Permissions.RESULTS.BLOCKED) {
          return false;
        }
      } else if (Platform.OS === 'android') {
        return await AndroidRequestPermission();
      }
}

async function AndroidRequestPermission() {
    if (parseInt(Platform.Version as string, 10) >= 33) {
        
        const permissions = await Permissions.checkMultiple([
          PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
          PERMISSIONS.ANDROID.READ_MEDIA_VIDEO,
        ]);        

        if (
          permissions[PERMISSIONS.ANDROID.READ_MEDIA_IMAGES] ===
            Permissions.RESULTS.GRANTED &&
          permissions[PERMISSIONS.ANDROID.READ_MEDIA_VIDEO] ===
            Permissions.RESULTS.GRANTED
        ) {
          return true;
        }

        const res = await Permissions.requestMultiple([
          PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
          PERMISSIONS.ANDROID.READ_MEDIA_VIDEO,
        ]);

        if (
          res[PERMISSIONS.ANDROID.READ_MEDIA_IMAGES] ===
            Permissions.RESULTS.GRANTED &&
          res[PERMISSIONS.ANDROID.READ_MEDIA_VIDEO] ===
            Permissions.RESULTS.GRANTED
        ) {
          return true;
        }
        if (
          res[PERMISSIONS.ANDROID.READ_MEDIA_IMAGES] ===
            Permissions.RESULTS.DENIED ||
          res[PERMISSIONS.ANDROID.READ_MEDIA_VIDEO] === Permissions.RESULTS.DENIED
        ) {
            return await AndroidRequestPermission();
        }

        if (
          res[PERMISSIONS.ANDROID.READ_MEDIA_IMAGES] ===
            Permissions.RESULTS.BLOCKED ||
          res[PERMISSIONS.ANDROID.READ_MEDIA_VIDEO] ===
            Permissions.RESULTS.BLOCKED
        ) {
          return false;
        }

      } else {
        const permission = await Permissions.check(
          PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
        );

        if (permission === Permissions.RESULTS.GRANTED) {
            return true;
        }

        const res = await Permissions.request(
          PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
        );

        if (res === Permissions.RESULTS.GRANTED) {
            return true;
        }

        if (res === Permissions.RESULTS.DENIED) {
            return await AndroidRequestPermission();
        }
        
        if (res === Permissions.RESULTS.BLOCKED) {
          return false;
        }
      }

      return false;
}

async function getDataUrl ({ type, url }) {
  const data = await getDataToRNFS({ type, url });
  const base64 = await RNFS.readFile(data, 'base64');
  return base64;
}

async function getDataToRNFS ({ type, url }) {
  let data = url;

  if (url.startsWith('ph://')) {
    const imagePATH = url.substring(5,41);
    
    let photoPATH = `assets-library://asset/asset.JPG?id=`;
    photoPATH = `${photoPATH}${imagePATH}&ext=${type.toUpperCase()}`;
    
    let dest = `${RNFS.TemporaryDirectoryPath}`;
    dest = `${dest}${Math.random().toString(36).substring(7)}.${type}`;

    data = await RNFS.copyAssetsFileIOS(photoPATH, dest, 500, 500, 1.0, 1.0, 'contain');
  }

  return data;
}

async function getStats({ type, url }) {
  const data = await getDataToRNFS({ type, url });
  const stats = await RNFS.stat(data);
  return stats;
}

export default {
    getFiles,
    openAppSettings,
};
