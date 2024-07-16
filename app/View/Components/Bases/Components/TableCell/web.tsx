import React from 'react';

export default function TableCell({children = undefined, style = {}, ...props}) {
  
  return (
    <td
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
    </td>
  );
}