import React from "react";

// Base components
import Svg from "app/View/Components/Bases/Components/Svg/__DOM_DRIVER__";
import SvgPath from "app/View/Components/Bases/Components/SvgPath/__DOM_DRIVER__";

function DownArrow({ classes = '', fill = 'black' }) {
    return (
        <Svg 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            classes={`w-4 h-4 fill-white ${classes}`}
        >
            <SvgPath
                d="
                    M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 
                    12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 
                    169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z
                "
                fill={fill}
            />
        </Svg>
    );
}


export default DownArrow;