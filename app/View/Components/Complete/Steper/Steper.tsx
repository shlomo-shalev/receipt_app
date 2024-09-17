// Tools
import React, { createContext, useEffect, useRef, useState } from "react";

export const SteperContext = createContext(null);

function Steper({ children, default: Default, steperRef = null }) {

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

    const steperValue = {
        onMove,
        stepsRef,
        dataRef,
        current,
    };

    if (steperRef) {
        steperRef.current = steperValue;
    }

    return (
        <SteperContext.Provider 
            value={steperValue}
        >
            {children}
        </SteperContext.Provider>
    );
}

export default Steper;