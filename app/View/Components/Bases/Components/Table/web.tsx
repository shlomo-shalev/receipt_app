import React from 'react';

export default function Table({children = undefined, style = {}, ...props}) {
  
  return (
    <table 
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
    </table>
  );
}