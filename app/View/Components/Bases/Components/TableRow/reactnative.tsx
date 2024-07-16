import React from 'react';
import Container from './Container';

export default function TableRow({children = undefined, style = {}, ...props}) {
  
  return (
    <Container 
      style={{
        color: 'black', 
        border: '1px solid black',
        borderCollapse: 'collapse',
        flexDirection: 'row',
        padding: 0,
        flex: 0,
        ...style
      }}
      {...props}
    >
      {children}
    </Container>
  );
}