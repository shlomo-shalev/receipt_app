import React from 'react';

export default function TableBody({children = undefined, style = {}, ...props}) {
  
  return (
    <tbody 
      style={{
        color: 'black', 
        border: '1px solid black',
        borderCollapse: 'collapse',
        padding: 5,
        ...style
      }}
      {...props}
    >
      {children}
    </tbody>
  );
}