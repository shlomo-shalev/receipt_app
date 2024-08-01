// Tools
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// bootstrap components
import App from 'app/View/App';
import FixedPositionHandler from 'app/View/Bootstrap/reactnative/FixedPositionHandler/FixedPositionHandler';

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

export default () => {

    return (
        <NavigationContainer theme={MyTheme}>
            <SafeAreaProvider>
                <GestureHandlerRootView 
                    style={{ flex: 1 }}
                >
                    <SafeAreaView
                        className="h-full relative" 
                        style={{backgroundColor: 'rgb(156 163 175)'}}
                    >
                        <App />
                        <FixedPositionHandler />
                    </SafeAreaView>
                </GestureHandlerRootView>
            </SafeAreaProvider>
        </NavigationContainer>
    );
}