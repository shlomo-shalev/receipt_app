// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Italic({children = undefined, style = {}, ...props}) {
  return (
    <Text 
      style={{...styles.italic, ...style}} 
      {...props}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  italic: {
    fontStyle: 'italic',
  },
});