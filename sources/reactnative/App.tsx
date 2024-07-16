import React from 'react';
import App from 'app/View/App';
import { SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const MyTheme = {
  colors: {
    background: "transparent", 
    border: "transparent", 
    card: "transparent", 
    notification: "transparent", 
    primary: "transparent", 
    text: "transparent"}, 
    dark: false,
}

export default () => (
    <NavigationContainer theme={MyTheme}>
        <SafeAreaView 
            className="h-full relative" 
            style={{backgroundColor: 'rgb(156 163 175)'}}
        >
            <App />
        </SafeAreaView>
    </NavigationContainer>
);