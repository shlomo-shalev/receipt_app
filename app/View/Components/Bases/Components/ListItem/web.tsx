import React from 'react';

export default function ListItem({children = undefined, style = {}, ...props}) {
  
  return (
    <li 
      style={{
        color: 'black', 
        ...style
      }}
      {...props}
    >
      {children}
    </li>
  );
}