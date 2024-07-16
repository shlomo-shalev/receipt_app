import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

export default function ListItem({children = undefined, style = {}, ...props}) {

  return (
    <View 
      style={{
        color: 'black', 
        ...style
      }}
      {...props}
    >
      <Text style={{color: 'black', ...style}}>
        <View style={{padding: 0, paddingBottom: 1, paddingTop: 1, paddingRight: 5}}>
          <Svg 
            height="8px" 
            viewBox="0 0 24 24" 
            width="8px" 
            fill="#000000"
          >
            <Path d="M24 24H0V0h24v24z" fill="none" />
            <Circle cx="12" cy="12" r="8" />
          </Svg>
        </View>
        {children}
      </Text>
    </View>
  );
}