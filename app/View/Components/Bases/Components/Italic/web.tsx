import React from 'react';

export default function Italic({children = undefined, style = {}, ...props}) {
  return (
    <i 
      style={{...style}} 
      {...props}
    >
      {children}
    </i>
  );
}