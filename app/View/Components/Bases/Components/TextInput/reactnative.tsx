// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TextInput as ReactNativeTextInput, StyleSheet } from 'react-native';

export default function TextInput({children = undefined, style = {}, type = undefined, ...props}) {

  if (type === 'text') type = undefined;

  return (
    <ReactNativeTextInput
      style={styles.input}
      keyboardType={type}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});