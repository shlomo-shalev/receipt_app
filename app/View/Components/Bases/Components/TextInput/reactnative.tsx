// Tools
import React from 'react';
import { Keyboard, TextInput as ReactNativeTextInput } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function TextAreaInput({
  children = undefined, style = {}, type = undefined, classes = '', ...props
}) {

  if (type === 'text') type = undefined;

  return (
    // <TouchableWithoutFeedback
    //   onPress={() => Keyboard.dismiss()}
    //   accessible={false}
    // >
      <ReactNativeTextInput
        keyboardType={type}
        className={`border h-10 py-2 w-full p-2 ${classes}`}
        {...props}
      />
    // </TouchableWithoutFeedback>
  );
}