import React from "react";

// Base components
import Svg from "app/View/Components/Bases/Components/Svg/__DOM_DRIVER__";
import SvgPath from "app/View/Components/Bases/Components/SvgPath/__DOM_DRIVER__";

function List({ classes = '', fill = 'white' }) {
    return (
        <Svg 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 17 15"
            classes={`w-4 h-4 fill-white ${classes}`}
        >
            <SvgPath
                d="
                    M0.5 10.5H16.5V8.5H0.5V10.5ZM0.5 14.5H16.5V12.5H0.5V14.5ZM0.5 
                    6.5H16.5V4.5H0.5V6.5ZM0.5 0.5V2.5H16.5V0.5H0.5Z
                "
                fill={fill}
            />
        </Svg>
    );
}


export default List;