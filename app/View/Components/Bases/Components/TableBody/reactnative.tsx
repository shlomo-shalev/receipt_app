import React from 'react';
import Container from './Container';

export default function TableBody({children = undefined, style = {}, ...props}) {
  
  return (
    <Container 
      style={{
        color: 'black', 
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