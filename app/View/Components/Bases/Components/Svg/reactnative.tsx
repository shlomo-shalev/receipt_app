import React from 'react';
import ReactNativeSvg from 'react-native-svg';

export default function Svg({children = undefined, classes = '', style = {}, ...props}) {
  
  return (
    <ReactNativeSvg
      style={{...style}}
      className={classes}
      {...props}
    >
      {children}
    </ReactNativeSvg>
  );
}