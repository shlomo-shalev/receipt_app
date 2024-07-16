import React from 'react';

export default function TextInput({children = undefined, style = {}, type = 'text', ...props}) {
  
  return (
    <input
      style={{...style}}
      type={type}
      {...props}
    />
  );
}