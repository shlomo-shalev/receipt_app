import React from 'react';

export default function Small({children = undefined, style = {}, ...props}) {
  return (
    <small 
      style={{...style}} 
      {...props}
    >
      {children}
    </small>
  );
}