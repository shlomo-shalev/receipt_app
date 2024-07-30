import React, { useEffect, useState } from 'react';
import { Image as ReactNativeImage } from 'react-native';

export default function Image({
  children = undefined, src, classes = '',style = {}, 
  width = 50, height = null, ...props
}) {

  return (
    <ReactNativeImage
      style={{
        ...style,
        width,
        height,
      }}
      className={classes}
      source={{
        uri: src,
      }}
      {...props}
    />
  );
}