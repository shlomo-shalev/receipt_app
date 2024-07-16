import React from 'react';

export default function Iframe({children = undefined, src, height = 100, ...props}) {
  
  return (
    <iframe
      src={src}
      style={{
        height,
        ...(props.style || {})
      }}
      {...props}
    />
  );
}