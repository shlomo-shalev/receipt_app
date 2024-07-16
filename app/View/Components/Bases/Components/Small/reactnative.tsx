// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Small({children = undefined, style = {}, ...props}) {
  return (
    <Text 
      style={{...styles.small, ...style}} 
      {...props}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  small: {
    fontSize: 12,
  },
});