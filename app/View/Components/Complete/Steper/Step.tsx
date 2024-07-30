// Tools
import React, { useContext } from "react";
import { SteperContext } from "./Steper";

function Step({ step, component: Component }) {
    const steperData = useContext(SteperContext);

    const { current, onMove } = steperData;    

    steperData.stepsRef.current.first = steperData.stepsRef.current.first
        ? steperData.stepsRef.current.first
        : step;
    steperData.stepsRef.current.steps[step] = {
        step,
    }    

    if (current == step) {
        return (
            <Component 
                steper={{
                    onMove,
                    dataRef: steperData.dataRef,
                }}
            />
        );
    }
}

export default Step;