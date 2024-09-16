import React from "react";

// Base components
import Svg from "app/View/Components/Bases/Components/Svg/__DOM_DRIVER__";
import SvgPath from "app/View/Components/Bases/Components/SvgPath/__DOM_DRIVER__";
import Spinner from "app/View/Components/Bases/Components/Spinner/__DOM_DRIVER__";

function Loading({ width, height, classes = '', fill = 'white' }) {
    return (
        <Spinner width={width} height={height}>
            <Svg 
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                width={width}
                height={height}
                classes={`${classes}`}
            >
                <SvgPath
                    d="
                        M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 
                        0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z
                    "
                    fill={fill}
                    classes="opacity-75"
                />
            </Svg>
        </Spinner>
    );
}


export default Loading;