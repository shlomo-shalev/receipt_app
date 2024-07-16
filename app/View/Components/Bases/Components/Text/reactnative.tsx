// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text as ReactNativeText } from 'react-native';

export default function Text({children = undefined, classes = "", style = {}, ...props}) {
  return (
    <ReactNativeText 
      {...props} 
      className={`text-black ${classes}`} 
      style={style}
    >
      {children}
    </ReactNativeText>
  );
}