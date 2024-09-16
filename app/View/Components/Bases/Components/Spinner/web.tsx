import React from "react";

// Base components
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";

function Spinner({ children, width, height }) {
    return (
        <>
            <style>
                {`
                    @keyframes spin {
                        from {
                            transform: rotate(0deg);
                        }
                        to {
                            transform: rotate(360deg);
                        }
                    }
                `}
            </style>
            <Container
                style={{
                    width,
                    height,
                    animation: 'spin 1s linear infinite',
                }}
            >
                {children}
            </Container>
        </>
    );
}


export default Spinner;