import React from "react";

// Base components
import Svg from "app/View/Components/Bases/Components/Svg/__DOM_DRIVER__";
import SvgPath from "app/View/Components/Bases/Components/SvgPath/__DOM_DRIVER__";

function Scan({ classes = '', fill = 'black' }) {
    return (
        <Svg 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25"
            classes={`w-4 h-4 fill-white ${classes}`}
        >
            <SvgPath
                d="
                    M6.5 16.5H18.5V8.5H6.5V16.5ZM8.5 10.5H16.5V14.5H8.5V10.5ZM4.5 15.5H2.5V18.5C2.5 
                    19.6 3.4 20.5 4.5 20.5H7.5V18.5H4.5V15.5ZM4.5 6.5H7.5V4.5H4.5C3.4 4.5 2.5 5.4 
                    2.5 6.5V9.5H4.5V6.5ZM20.5 4.5H17.5V6.5H20.5V9.5H22.5V6.5C22.5 5.4 21.6 4.5 20.5 
                    4.5ZM20.5 18.5H17.5V20.5H20.5C21.6 20.5 22.5 19.6 22.5 18.5V15.5H20.5V18.5Z
                "
                fill={fill}
            />
        </Svg>
    );
}


export default Scan;