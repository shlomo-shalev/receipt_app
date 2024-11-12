import React, { forwardRef, useEffect } from 'react';
import { Image as ReactNativeImage } from 'react-native';

function Image({
  children = undefined, src, classes = '',style = {}, 
  width = 50, height = null, onSizes = (data) => {}, ...props
}, ref) {
  useEffect(() => {    
    ReactNativeImage.getSize(
      src,
      (width, height) => {
        onSizes({ width, height });
      },
      (error) => {
          console.error("Failed to load image", error);
      }
    );
  }, [src]);

  return (
    <ReactNativeImage
      ref={ref}
      style={{
        ...style,
        width,
        height,
      }}
      className={classes}
      // resizeMode="contain"
      source={{
        uri: src,
      }}
      {...props}
    />
  );
}

export default forwardRef(Image);