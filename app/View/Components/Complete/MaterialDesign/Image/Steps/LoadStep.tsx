// Tools
import React, { useEffect, useState } from "react";

// Base components
import Image from "app/View/Components/Bases/Components/Image/__DOM_DRIVER__";
import Skeleton from "app/View/Components/Bases/Components/Skeleton/__DOM_DRIVER__";
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

function LoadStep({ steper: { onMove }, file, ...props }) {   

    const [sizes, setSizes] = useState(null);
    const [containerSizes, setContainerSizes] = useState(null);

    useEffect(() => {
        if (containerSizes && sizes) {
            onMove('image', {
                image: {
                    file,
                    sizes,
                },
                container: {
                    sizes: containerSizes,
                }
            });
        }
    }, [containerSizes, sizes]);
    
    return (
        <Container onSizes={sizes => setContainerSizes(sizes)}>
            <Skeleton 
                width={props.width == 'auto' ? 90 : props.width}
                height={props.height == 'auto' ? 50 : props.height}
            />
            <Image 
                src={file.url}
                onSizes={sizes => {
                    setSizes(sizes);
                }}
            />
        </Container>
    );
}

export default LoadStep;