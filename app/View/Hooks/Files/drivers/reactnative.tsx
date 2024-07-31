// Tools
// import { Alert, Linking, PermissionsAndroid, Platform } from 'react-native';
// import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
// import RNFS from 'react-native-fs';
// import { launchImageLibrary } from 'react-native-image-picker';
import { Linking, Platform } from 'react-native';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import Permissions, {PERMISSIONS} from 'react-native-permissions';

export function getFiles() {
    return {
        waitPullFiles: getList(),
    };
}

export function openAppSettings () {
    Linking.openSettings()
}

async function getList() {
    let photosData = {edges: []};
    let status = 'allow';

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

    return {
        files: photosData.edges.map(image => ({
            url: image.node.image.uri,
        })),
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

export default {
    getFiles,
    openAppSettings,
};
