// Tools
import React, { createContext, useEffect, useRef, useState } from "react";

export const SteperContext = createContext(null);

function Steper({ children, default: Default }) {

    const stepsRef = useRef({
        first: null,
        steps: {},
    });

    const dataRef = useRef({});

    const [state, setState] = useState({
        current: Default,
    });
    
    const { current } = state;

    useEffect(() => {
        if (!stepsRef.current.steps[current]) {
            setState(state => ({
                ...state,
                current: stepsRef.current.first,
            }));
        }
    }, []);
    
    const onMove = (step, data = {}) => {
        dataRef.current = data;
        setState(state => ({
            ...state,
            current: stepsRef.current.steps[step] ? step : stepsRef.current.first,
        }));
    };

    return (
        <SteperContext.Provider 
            value={{
                onMove,
                stepsRef,
                dataRef,
                current,
            }}
        >
            {children}
        </SteperContext.Provider>
    );
}

export default Steper;