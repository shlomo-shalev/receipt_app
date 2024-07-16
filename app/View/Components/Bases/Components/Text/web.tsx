// import { StatusBar } from 'expo-status-bar';
import React from 'react';

export default function Text({children = undefined, style = {}, classes = "", ...props}) {
  return (
    <p 
      {...props}
      style={{...pStyle, ...style}} 
      className={classes}
    >
      {children}
    </p>
  );
}

const pStyle = {
  backgroundColor: 'transparent',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 0,
  color: 'black',
}