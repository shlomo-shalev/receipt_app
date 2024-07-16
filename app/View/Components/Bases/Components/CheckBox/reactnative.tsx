// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import ReactNativeCheckBox from '@react-native-community/checkbox';

export default function CheckBox({children = undefined, style = {}, check = false, ...props}) {
  const [state, setState] = useState({check});

  return (
    <ReactNativeCheckBox
      value={state.check}
      style={styles.checkbox}
      onValueChange={(newCheck) => setState(state => ({...state,check: newCheck}))}
      boxType="square"
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  checkbox: {
    alignSelf: 'center',
  },
});