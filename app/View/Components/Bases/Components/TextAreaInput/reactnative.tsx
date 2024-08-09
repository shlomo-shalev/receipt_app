// Tools
import React from 'react';
import { Keyboard, TextInput as ReactNativeTextInput } from 'react-native';

export default function TextInput({
  children = undefined, style = {}, type = undefined, classes = '', ...props
}) {

  if (type === 'text') type = undefined;

  return (
    <ReactNativeTextInput
      keyboardType={type}
      multiline={true} 
      onBlur={() => Keyboard.dismiss()}
      className={`border h-20 w-full p-2 ${classes}`}
      style={{
        textAlignVertical: 'top',
      }}
      {...props}
    />
  );
}