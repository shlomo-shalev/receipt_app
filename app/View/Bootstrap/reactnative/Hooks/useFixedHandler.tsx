import React, { useEffect } from "react";
import { DeviceEventEmitter } from "react-native";

function useFixedHandler({ key, jsx, isFixed = false }) : {isFixed: boolean}
{
    useEffect(() => {
        if (isFixed) {
            DeviceEventEmitter.emit('fixedPositionEvent', {
                component: () => {
                    return (
                        <React.Fragment key={key}>
                        {jsx}
                        </React.Fragment>
                    );
                },
                id: key,
            });
        }
    });

    useEffect(() => {
        if (isFixed) {
            return () => {      
                DeviceEventEmitter.emit('fixedPositionRemoveEvent', {
                    id: key,
                });
            }
        }
    }, []);

    return {
        isFixed,
    };
}

export default useFixedHandler;