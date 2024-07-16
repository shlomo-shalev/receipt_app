import React from 'react';

export default function Svg({children = undefined, classes = '', style = {}, ...props}) {
  
  return (
    <svg
      style={{...style}}
      className={classes}
      {...props}
    >
      {children}
    </svg>
  );
}