// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import TitleInterface from 'app/View/Components/Bases/Interfaces/TitleInterface';

export default function Title({children = undefined, classes = '', type = 'h1', style = {}, ...props}: TitleInterface) {  

  return (
    <Text 
      style={style}
      className={`text-black font-arial font-normal text-xl ${classes}`}
    >
      {children}
    </Text>
  );
}