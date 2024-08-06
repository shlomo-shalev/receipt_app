// Tools
import React from "react";

// Base components
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";

function Fixed(Component, classes = '', isRef = false) {    
    const fn = (props, more) => {
        const ref = isRef ? more : null;
        const key = !isRef ? more : null;

        return (
            <Container 
                classes={`fixed ${classes}`}
            >
                <Component 
                    {...props}
                    key={key}
                    ref={ref}
                />
            </Container>
        );
    };

    return isRef ? React.forwardRef(fn) : fn;
};

export default Fixed;