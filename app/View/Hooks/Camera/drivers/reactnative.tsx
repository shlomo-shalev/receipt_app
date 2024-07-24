// Tools
import { Camera, useCameraDevices } from "react-native-vision-camera";

export function requestPermisstion() : Function {
  const devices = useCameraDevices();

  return async () => {
    const cameraPermission = await Camera.requestCameraPermission();    
    return cameraPermission === 'granted' && devices.length > 0;
  }
}

export function cameraExists() : boolean {
  const devices = useCameraDevices();

  return devices.length > 0;
}

export default {
    requestPermisstion,
    cameraExists,
};
