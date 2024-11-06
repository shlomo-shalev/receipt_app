// Tools
import uuid from "uuid-random";
import RNFS from 'react-native-fs';
import React, { useEffect, useRef, useState } from 'react';
import { Camera as CameraComponent, useCameraDevices } from 'react-native-vision-camera';

// Base Components
import Container from '../Container/reactnative';

const Camera = ({ 
  takePictureRef, onStarted = () => {}, style = {},
  classes = {root: '', camera: ''}, height = null, width = null
}, key) => {
  const [hasPermission, setHasPermission] = useState(false);
  const devices = useCameraDevices();
  const device = Object.values(devices || [])[0] || null;  

  const camera = useRef(null);

  useEffect(() => {
    const requestPermissions = async () => {
      const cameraPermission = await CameraComponent.requestCameraPermission();
      setHasPermission(cameraPermission === 'granted' && devices.length > 0);
    };

    requestPermissions();
  }, []);
  
  const handleTakePicture = async () => {
    const picture = await camera.current.takePhoto({
      format: 'jpeg',
    });    
    const type = 'image/jpeg';

    const file = {
      id: uuid(),
      name: new Date().toString(),
      type,
      base64: async function () : Promise<string> {
        return await RNFS.readFile(picture.path, 'base64');
      },
      url: picture.path,
      dates: async function () : Promise<{lastModified: number, lastModifiedDate: Date}> {
        const stats = await RNFS.stat(picture.path);
        const date = stats.mtime;
    
        return {
            lastModified: new Date(date).getTime(),
            lastModifiedDate: new Date(date),
        };
      },
    }
    
    return file;
  };

  takePictureRef.current = handleTakePicture;

  let jsx = null;

  if (hasPermission) {
    jsx = (
      <Container 
        className={classes.root}
        style={style}
        key={key}
      >
        <CameraComponent
          // className={classes.camera}
          style={{
              height: height || '100%',
              width: width || '100%',
          }}
          resizeMode="cover"
          ref={camera}
          photoQualityBalance="speed"
          onStarted={() => onStarted()}
          device={device}
          isActive={true}
          video={false}
          photo={true}
        />
      </Container>
    );
  }

  return jsx;
};

export default Camera;