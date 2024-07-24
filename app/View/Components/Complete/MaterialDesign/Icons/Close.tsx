import React from "react";

// Base components
import Svg from "app/View/Components/Bases/Components/Svg/__DOM_DRIVER__";
import SvgPath from "app/View/Components/Bases/Components/SvgPath/__DOM_DRIVER__";

function Close({ classes = '', fill = 'black' }) {
    return (
        <Svg 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            classes={`w-4 h-4 fill-white ${classes}`}
        >
            <SvgPath
                d="
                    M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 
                    0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 
                    32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 
                    45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 
                    12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z
                "
                fill={fill}
            />
        </Svg>
    );
}


export default Close;