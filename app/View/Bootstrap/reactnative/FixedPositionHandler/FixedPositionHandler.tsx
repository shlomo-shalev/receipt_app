// Tools
import React, { useState } from "react";
import { DeviceEventEmitter } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Base components
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";

const eventEmitter = DeviceEventEmitter;

function FixedPositionHandler() {
    const insets = useSafeAreaInsets();

    const [state, setState] = useState({
        components: {},
    });

    const { components } = state;

    const ids = Object.keys(components);    

    eventEmitter.removeAllListeners('fixedPositionEvent');
    eventEmitter.removeAllListeners('fixedPositionRemoveEvent');

    eventEmitter.addListener('fixedPositionEvent', ({ component, id }) => {                    
        setState(state => ({
            ...state,
            components: {
                ...state.components,
                [id]: component,
            }
        }));
    });    

    eventEmitter.addListener('fixedPositionRemoveEvent', ({ id }) => {        
        setState(state => {
            let components = state.components;
            delete components[id];

            return ({
                ...state,
                components,
            });
        });
    });

    return (
        <>
            {ids.map((id) => {
                const Component = components[id];
                
                return (
                    <Container 
                        key={id}
                        classes="absolute left-0 right-0 top-0 bottom-0"
                        style={{
                            top: insets.top,
                            bottom: insets.bottom,
                        }}
                    >
                        <Component key={id} />   
                    </Container>
                );
            })}
        </>
    );
}

export default FixedPositionHandler;