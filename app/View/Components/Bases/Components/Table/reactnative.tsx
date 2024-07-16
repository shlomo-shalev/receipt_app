import React from 'react';
import Container from './Container';

export default function Table({children = undefined, style = {}, ...props}) {
  
  return (
    <Container 
      style={{
        color: 'black', 
        display: 'flex',
        flexDirection: 'column',
        borderWidth: 0.5,
        borderColor: 'black',
        borderStyle: 'solid',
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