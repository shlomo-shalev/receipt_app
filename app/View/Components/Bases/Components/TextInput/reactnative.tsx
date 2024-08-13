// Tools
import React, { useEffect, useRef } from 'react';
import { Keyboard, TextInput as ReactNativeTextInput } from 'react-native';

export default function TextAreaInput({
  children = undefined, style = {}, type = undefined, classes = '', 
  inputRef = null, ...props
}) {

  const ref = useRef(null);

  useEffect(() => {
    if (typeof inputRef === 'function') {
      inputRef(ref.current);
    }
    else {
      inputRef.current = ref.current;
    }
  }, []);
  
  if (type === 'text') type = undefined;

  return (
    <ReactNativeTextInput
      keyboardType={type}
      ref={ref}
      onSubmitEditing={() => Keyboard.dismiss()}
      onChangeText={text => {
        ref.current.originalValue = text;
      }}
      returnKeyType="done"
      className={`border h-10 py-2 w-full p-2 ${classes}`}
      {...props}
    />
  );
}