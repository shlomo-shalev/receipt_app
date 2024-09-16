// Tools
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { I18nManager } from 'react-native';

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

// bootstrap components
import App from 'app/View/App';
import FixedPositionHandler from 'app/View/Bootstrap/reactnative/FixedPositionHandler/FixedPositionHandler';

const MyTheme = {
    dir: 'ltr',
    colors: {
        background: "transparent", 
        border: "transparent", 
        card: "transparent", 
        notification: "transparent", 
        primary: "transparent", 
        text: "transparent"
    }, 
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
                        style={{backgroundColor: 'rgb(75 85 99)'}}
                    >
                        <App />
                        <FixedPositionHandler />
                    </SafeAreaView>
                </GestureHandlerRootView>
            </SafeAreaProvider>
        </NavigationContainer>
    );
}