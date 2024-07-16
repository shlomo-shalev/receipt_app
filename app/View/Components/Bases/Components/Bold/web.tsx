import React from 'react';

export default function Bold({children = undefined, style = {}, ...props}) {
  return (
    <b 
      style={{...style}} 
      {...props}
    >
      {children}
    </b>
  );
}