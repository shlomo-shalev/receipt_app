// Tools
import React from "react";

// Base components
import Image from "app/View/Components/Bases/Components/Image/__DOM_DRIVER__";
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

function ImageStep({ steper: { onMove, dataRef }, file, ...props }) {
    const image = dataRef.current.image;

    return (
        <Container classes="">
            <Image 
                src={image.url}
                ref={props.ImageRef}
                {...props}
            />
        </Container>
    );
}

export default ImageStep;