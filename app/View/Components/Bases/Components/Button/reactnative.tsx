import React, { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Text from './../Text/reactnative';

export default function Button({children = undefined, style = {}, onClick = null, ...props}) {
  const [state, setState] = useState({
    backgroundColor: 'rgb(239, 239, 239)',
    borderColor: 'rgb(118, 118, 118)',
  });

  function habldeObject (children) {
    if (typeof children[0] === 'string' || typeof children === 'string') {
      return (
        <Text style={{...styles.text, ...style}}>
          {children}
        </Text>
      );
    }
    return children;
  }

  return (
    <Pressable 
      style={{
        ...styles.button, 
        backgroundColor: state.backgroundColor,
        borderColor: state.borderColor,
        ...style,
      }}
      onTouchEnd={onClick} 
      onPressIn={()=> {
        setState(state => ({
          ...state, 
          backgroundColor: 'rgb(245, 245, 245)',
          borderColor: 'rgb(130, 130, 130)',
        }));
      }}
      onPressOut={() => {
        setState(state => ({
          ...state, 
          backgroundColor: 'rgb(239, 239, 239)',
          borderColor: 'rgb(118, 118, 118)',
        }));
      }}
      {...props}
    >
      {habldeObject(children)}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1%',
    paddingLeft: '2%',
    paddingRight: '2%',
    borderWidth: 1,
    borderRadius: 3,
  },
  text: {
    fontSize: 16,
    color: 'rgb(0, 0, 0)',
  },
});