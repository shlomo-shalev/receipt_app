// Tools
import uuid from "uuid-random";
import React, { useCallback, useEffect, useRef } from "react";
import { DeviceEventEmitter, View } from "react-native";

// Base components
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";

var idCounter = 1;

function Fixed(Component, classes = '', isRef = false, settings = {}) 
{
    const Fn = (props, more): JSX.Element => {
        // const ref = isRef ? more : null;
        // const key = !isRef ? more : null;

        const id = useCallback(() => {
            const id = useRef(uuid() + `:${idCounter}`);
            idCounter++;
            return id.current;
        }, [])();        

        useEffect(() => {
            DeviceEventEmitter.emit('fixedPositionEvent', {
                component: (localProps, key) => {
                    return (
                        <Container 
                            classes={`fixed ${classes}`}
                            key={key}
                        >
                            <Component 
                                {...props}
                            />
                        </Container>
                    );
                },
                id,
                settings,
            });
        });
    
        useEffect(() => {
            return () => {      
                DeviceEventEmitter.emit('fixedPositionRemoveEvent', {
                    id,
                });
            }
        }, []);
    
        return <View key={id} />;
    };

    return isRef ? React.forwardRef(Fn) : Fn;
}

export default Fixed;