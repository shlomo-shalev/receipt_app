// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Bold({children = undefined, style = {}, ...props}) {
  return (
    <Text 
      style={{...styles.bold, ...style}} 
      {...props}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
});