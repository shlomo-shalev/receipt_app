import React, { useCallback, useState } from 'react';
import { Linking } from 'react-native';
import Button from './Button';

export default function Link({children = undefined, href, alt, style = {}, ...props}) {
  const [state, setState] = useState({color: 'rgb(0, 0, 238)'});

  const handlePress = useCallback(async () => {
    
    await new Promise(res => setTimeout(() => res(), 50));

    await Linking.openURL(href);
  }, [href]);
  
  return (
    <Button 
      onClick={handlePress} 
      onPressIn={() => {
        setState(state => ({...state, color: 'rgb(255, 0, 0)'}));
      }}
      onPressOut={() => {
        setState(state => ({...state, color: 'rgb(0, 0, 238)'}));
      }}
      style={{
        borderWidth: 0,
        borderRadius: 0,
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        color: state.color,
        textDecorationLine: 'underline',
        ...style,
      }}
    >
      {children}
    </Button>
  );
}