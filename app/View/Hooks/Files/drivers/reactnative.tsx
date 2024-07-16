// Tools
// import { Alert, Linking, PermissionsAndroid, Platform } from 'react-native';
// import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
// import RNFS from 'react-native-fs';
// import { launchImageLibrary } from 'react-native-image-picker';
import { Linking } from 'react-native';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';

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
        photosData = await CameraRoll.getPhotos({
            first: 20,
            assetType: 'Photos',
            // sortBy: 'creationTime',
        }); 
    }
    catch (ex) {
        status = 'denied';
    }    

    return {
        files: photosData.edges.map(image => ({
            uri: image.node.image.uri,
        })),
        status,
    };
}

export default {
    getFiles,
    openAppSettings,
};
