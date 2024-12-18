import React from "react";

// Base components
import Svg from "app/View/Components/Bases/Components/Svg/__DOM_DRIVER__";
import SvgPath from "app/View/Components/Bases/Components/SvgPath/__DOM_DRIVER__";

function Backup({ classes = '', fill = 'black' }) {
    return (
        <Svg 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            classes={`w-4 h-4 fill-white ${classes}`}
        >
            <SvgPath
                d="
                    M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 
                    64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 
                    0zM216 408c0 13.3-10.7 24-24 24s-24-10.7-24-24V305.9l-31 31c-9.4 
                    9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l72-72c9.4-9.4 24.6-9.4 33.9 
                    0l72 72c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-31-31V408z
                "
                fill={fill}
            />
        </Svg>
    );
}


export default Backup;