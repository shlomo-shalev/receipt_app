import React from 'react';
import { Circle } from "react-native-svg"

export default function SvgCircle({children = undefined, style = {}, classes = '', ...props}) {
  
  return (
    <Circle
      className={classes}
      {...props}
    />
  );
}