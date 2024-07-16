// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import TitleInterface from 'app/View/Components/Bases/Interfaces/TitleInterface';

export default function Title({children = undefined, classes = '', type = 'h1', style = {}, ...props}: TitleInterface) {
  const DomType = type;

  return (
    <DomType
      {...props}
      className={`m-0 text-black font-arial font-normal text-xl ${classes}`}
      style={{...(style || {})}}
      suppressHydrationWarning
    >
      {children}
    </DomType>
  );
}