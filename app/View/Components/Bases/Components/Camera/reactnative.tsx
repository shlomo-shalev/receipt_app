// Tools
import RNFS from 'react-native-fs';
import React, { useEffect, useRef, useState } from 'react';
import { Camera as CameraComponent, useCameraDevices } from 'react-native-vision-camera';

// Base Components
import Container from '../Container/reactnative';

const Camera = ({ 
  takePictureRef, onStarted = () => {}, style = {},
  classes = {root: '', camera: ''} 
}) => {
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

    const base64String = await RNFS.readFile(picture.path, 'base64');
    const stats = await RNFS.stat(picture.path);
    const dataURL = `data:${type};base64,${base64String}`;

    const file = {
      name: new Date().toString(),
      type,
      dataUrl: dataURL,
      url: picture.path,
      lastModified: new Date(stats.mtime).getTime(),
      lastModifiedDate: new Date(stats.mtime),
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
      >
        <CameraComponent
          // className={classes.camera}
          style={{
              height: '100%',
              width: '100%',
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