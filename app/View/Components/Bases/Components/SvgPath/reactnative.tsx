import React from 'react';
import { Path } from "react-native-svg"

export default function SvgPath({children = undefined, style = {}, ...props}) {
  
  return (
    <Path
      {...props}
    />
  );
}