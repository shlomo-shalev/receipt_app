// import { StatusBar } from 'expo-status-bar';
import React from 'react';

export default function Button({children = undefined, style = {}, onClick = null, ...props}) {
  
  return (
    <button
      {...props}
      onClick={onClick}
      style={{...style}}
    >
      {children}
    </button>
  );
}