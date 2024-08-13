// Tools
import React, { useEffect, useRef } from 'react';
import { InputAccessoryView, Keyboard, TextInput as ReactNativeTextInput, View } from 'react-native';
import Button from '../Button/reactnative';

export default function TextInput({
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

  const handleDonePress = () => Keyboard.dismiss();

  return (
      <View>
        <ReactNativeTextInput
          keyboardType={type}
          ref={ref}
          multiline={true} 
          onChangeText={text => {
            ref.current.originalValue = text;
          }}
          className={`border h-20 w-full p-2 ${classes}`}
          inputAccessoryViewID="inputAccessory"
          style={{
            textAlignVertical: 'top',
          }}
          {...props}
        />
        <InputAccessoryView nativeID="inputAccessory">
          <View>
            <Button 
              title="Done" 
              style={{
                backgroundColor: 'white',
                width: 60,
                textAlign: 'center',
              }}
              onPress={handleDonePress}
            >
              Done
            </Button>
          </View>
        </InputAccessoryView>
      </View>
  );
}