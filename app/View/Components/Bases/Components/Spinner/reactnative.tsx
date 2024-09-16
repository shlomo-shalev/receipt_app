// Tools
import React, { useEffect } from "react";
import { Animated, Easing } from "react-native";

const spinValue = new Animated.Value(0);

export const startSpinAnimation = () => {
  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: false,
    })
  ).start();
};

export const getSpinAnimation = () => {
  return spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
};

function Spinner({ children, width, height }) {
    useEffect(() => {
        startSpinAnimation();
    }, []);
  
    const spin = getSpinAnimation();

    return (
        <Animated.View style={{ width, height, transform: [{ rotate: spin }] }}>
            {children}
        </Animated.View>
    );
}


export default Spinner;