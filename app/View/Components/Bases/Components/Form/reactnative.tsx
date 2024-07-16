// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function Form({children = undefined, style = {}, action = '/', ...props}) {

  return (
    <SafeAreaView style={{...styles.form, ...style}} {...props}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  form: {
    width: '100%',
  },
});