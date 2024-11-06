// Tools
import React, { useEffect } from "react";

// Base components
import Skeleton from "app/View/Components/Bases/Components/Skeleton/__DOM_DRIVER__";
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

function LoadStep({ steper: { onMove, dataRef }, file, ...props }) {

    useEffect(() => {
        (async () => {
            await new Promise((res) => setTimeout(res, 2000));

            onMove('image', {
                image: file,
            });
        })()
    }, []);    

    return (
        <Container>
            <Skeleton 
                width={props.width == 'auto' ? 50 : props.width}
                height={props.height == 'auto' ? 50 : props.height}
            />
        </Container>
    );
}

export default LoadStep;