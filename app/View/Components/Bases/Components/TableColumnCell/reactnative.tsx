import React from 'react';
import Container from './Container';
import { Text } from 'react-native';

export default function TableColumnCell({children = undefined, style = {}, ...props}) {
  
  function habldeObject (children) {
    if (typeof children[0] === 'string' || typeof children === 'string') {
      return (
        <Text 
          style={{
            color: 'black',
            fontWeight: 'bold',
          }}
        >
          {children}
        </Text>
      );
    }
    return children;
  }

  return (
    <Container
      style={{
        color: 'black', 
        borderWidth: 0.5,
        borderColor: 'black',
        borderStyle: 'solid',
        padding: 10,
        flex: 1,
        ...style
      }}
      {...props}
    >
      {habldeObject(children)}
    </Container>
  );
}