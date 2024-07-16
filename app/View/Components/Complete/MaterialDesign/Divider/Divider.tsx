// Tools
import React from "react";

// Base components
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";

function Divider({ classes = '' }) {
    return (
        <Container 
            classes={`border-t border-gray-400 ${classes}`}
        />
    );
}

export default Divider;