import React from 'react';

export default function SvgCircle({children = undefined, classes = '', ...props}) {
  
  return (
    <circle
      className={classes}
      {...props}
    >
      {children}
    </circle>
  );
}