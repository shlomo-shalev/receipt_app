import React from "react";

// Base components
import Svg from "app/View/Components/Bases/Components/Svg/__DOM_DRIVER__";
import SvgPath from "app/View/Components/Bases/Components/SvgPath/__DOM_DRIVER__";

function Images({ classes = '', fill = 'black' }) {
    return (
        <Svg 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            classes={`w-4 h-4 fill-white ${classes}`}
        >
            <SvgPath
                d="
                    M160 32c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64l352 
                    0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L160 32zM396 
                    138.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S480.9 320 472 320l-144 0-48 
                    0-80 0c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 
                    11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84C360.5 132 368 128 376 
                    128s15.5 4 20 10.7zM192 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM48 
                    120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 344c0 75.1 60.9 136 136 
                    136l320 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-320 0c-48.6 
                    0-88-39.4-88-88l0-224z
                "
                fill={fill}
            />
        </Svg>
    );
}


export default Images;