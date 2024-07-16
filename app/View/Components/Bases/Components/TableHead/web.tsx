import React from 'react';

export default function TableHead({children = undefined, style = {}, ...props}) {
  
  return (
    <thead
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
    </thead>
  );
}