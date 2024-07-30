import React from "react";

// Base components
import Svg from "app/View/Components/Bases/Components/Svg/__DOM_DRIVER__";
import SvgPath from "app/View/Components/Bases/Components/SvgPath/__DOM_DRIVER__";

function UpArrow({ classes = '', fill = 'black' }) {
    return (
        <Svg 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            classes={`w-4 h-4 fill-white ${classes}`}
        >
            <SvgPath
                d="
                    M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 
                    12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 
                    448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 
                    246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z
                "
                fill={fill}
            />
        </Svg>
    );
}


export default UpArrow;