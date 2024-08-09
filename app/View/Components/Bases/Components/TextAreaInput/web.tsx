import React from 'react';

export default function TextInput({
  children = undefined, style = {}, type = 'text', classes = '', ...props
}) {
  
  return (
    <input
      style={{...style}}
      type={type}
      className={`border h-20 py-2 p-2 w-full bg-transparent ${classes}`}
      {...props}
    />
  );
}