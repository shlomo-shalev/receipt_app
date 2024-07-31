import React from "react";

// Base components
import Svg from "app/View/Components/Bases/Components/Svg/__DOM_DRIVER__";
import SvgPath from "app/View/Components/Bases/Components/SvgPath/__DOM_DRIVER__";

function Continue({ classes = '', fill = 'black' }) {
    return (
        <Svg 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            classes={`w-4 h-4 fill-white ${classes}`}
        >
            <SvgPath
                 d="
                    M8.80001 15.8998L4.60001 11.6998L3.20001 13.0998L8.80001 
                    18.6998L20.8 6.6998L19.4 5.2998L8.80001 15.8998Z
                 "
                fill={fill}
            />
        </Svg>
    );
}


export default Continue;