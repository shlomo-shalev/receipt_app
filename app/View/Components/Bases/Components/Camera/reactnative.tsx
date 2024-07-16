import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const devices = useCameraDevices();
  const [device, setDevice] = useState(null);  

  useEffect(() => {
    const requestPermissions = async () => {
      const cameraPermission = await Camera.requestCameraPermission();
      setHasPermission(cameraPermission === 'granted' && devices.length > 0);
    };

    requestPermissions();
  }, []);

  useEffect(() => {
    if (devices && Object.keys(devices).length > 0) {        
      const availableDevices = Object.values(devices);
      setDevice(availableDevices[0]);
    }
  }, [devices]);
  

  if (!hasPermission) {
    return <View style={styles.centered}><Text>No camera or microphone permission</Text></View>;
  }

  return (
    <View style={styles.container}>
      <Camera
        style={{
            height: '100%',
            width: 500,
        }}
        device={device}
        isActive={true}
        photo={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: 'black',
      position: 'relative',
    },
    centered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomBar: {
      width: '100%',
      height: 100,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    captureButton: {
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    captureButtonText: {
      fontSize: 14,
      color: 'black',
    },
  });

export default CameraScreen;