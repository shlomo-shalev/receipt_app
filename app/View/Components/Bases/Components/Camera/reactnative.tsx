// Tools
import React, { useEffect, useState } from 'react';
import { Camera as CameraComponent, useCameraDevices } from 'react-native-vision-camera';

// Base Components
import Container from '../Container/reactnative';

const Camera = ({ takePictureRef, classes = {root: '', camera: ''} }) => {
  const [hasPermission, setHasPermission] = useState(false);
  const devices = useCameraDevices();
  const device = Object.values(devices || [])[0] || null;  

  useEffect(() => {
    const requestPermissions = async () => {
      const cameraPermission = await CameraComponent.requestCameraPermission();
      setHasPermission(cameraPermission === 'granted' && devices.length > 0);
    };

    requestPermissions();
  }, []);
  
  let jsx = null;

  if (hasPermission) {
    jsx = (
      <Container className={classes.root}>
        <CameraComponent
          className={classes.camera}
          style={{
              height: '100%',
              width: 500,
          }}
          onStarted={() => console.log('start')}
          device={device}
          isActive={true}
          photo={true}
        />
      </Container>
    );
  }

  return jsx;
};

export default Camera;