import React from 'react';
import { Image as ReactNativeImage } from 'react-native';

export default function Image({
  children = undefined, src, classes = '',style = {}, 
  width = 50, ...props
}) {
  
  return (
    <ReactNativeImage
      style={{
        width,
        ...style
      }}
      className={classes}
      source={{
        uri: src,
      }}
      {...props}
    />
  );
}