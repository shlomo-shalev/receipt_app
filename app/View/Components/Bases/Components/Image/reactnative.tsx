import React, { forwardRef, useEffect, useState } from 'react';
import { Image as ReactNativeImage } from 'react-native';

function Image({
  children = undefined, src, classes = '',style = {}, 
  width = 50, height = null, ...props
}, ref) {

  return (
    <ReactNativeImage
      ref={ref}
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

export default forwardRef(Image);