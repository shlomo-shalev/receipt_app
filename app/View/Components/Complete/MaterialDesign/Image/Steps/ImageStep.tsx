// Tools
import React from "react";

// Base components
import Image from "app/View/Components/Bases/Components/Image/__DOM_DRIVER__";
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

function ImageStep({ steper: { dataRef }, classes = '', ...props }) {
    const image = dataRef.current.image;
    const container = dataRef.current.container;

    const aspectRatioW = parseInt(image.sizes.height) / parseInt(image.sizes.width);
    const aspectRatioH = parseInt(image.sizes.width) / parseInt(image.sizes.height);
    
    const calculateWidth = aspectRatioH * parseInt(container.sizes.height);
    const calculateHeight = aspectRatioW * parseInt(container.sizes.width);

    const width = props.width === '100%' ? '100%' : calculateWidth;
    const height = props.height === '100%' ? '100%' : calculateHeight;
    
    return (
        <Container>
            <Image 
                src={image.file.url}
                ref={props.ImageRef}
                classes={classes}
                width={props.width === 'auto' ? width : props.width}
                height={props.height === 'auto' ? height : props.height}
            />
        </Container>
    );
}

export default ImageStep;