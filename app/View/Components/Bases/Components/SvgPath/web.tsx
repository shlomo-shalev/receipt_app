import React from 'react';

export default function SvgPath({children = undefined, style = {}, ...props}) {
  
  return (
    <path
      style={{...style}}
      {...props}
    >
      {children}
    </path>
  );
}