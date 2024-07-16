import React from 'react';

export default function TableColumnCell({children = undefined, style = {}, ...props}) {
  
  return (
    <th
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
    </th>
  );
}