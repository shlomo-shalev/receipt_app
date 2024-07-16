import React from 'react';

export default function List({children = undefined, style = {}, ...props}) {
  
  return (
    <ul 
      style={{
        color: 'black', 
        ...style
      }}
      {...props}
    >
      {children}
    </ul>
  );
}