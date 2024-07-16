import React from 'react';

export default function TableRow({children = undefined, style = {}, ...props}) {
  
  return (
    <tr 
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
    </tr>
  );
}