import React from 'react';
import { View } from 'react-native';

export default function List({children = undefined, style = {}, ...props}) {
  
  return (
    <View 
      style={{
        color: 'black', 
        ...style
      }}
      {...props}
    >
      {children}
    </View>
  );
}