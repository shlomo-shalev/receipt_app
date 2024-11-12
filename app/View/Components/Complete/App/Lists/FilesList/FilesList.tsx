// Tools
import React, { useEffect, useRef } from "react";

// Base components
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";

// Apis
import Scroll from "app/View/Hooks/Scroll/Scroll";

// Complete components
// -- app
import Image from "app/View/Components/Complete/MaterialDesign/Image/Image";

function FilesList({ files, height = '100%', width = 'auto', 
    classes = { image: '', imageRoot: '' },
    handleFileFouseRef = null, onClick = null
}) {
    const filesRef = useRef({});

    const handleFileFouse = (id, scrollElementRef) => {        
        Scroll.to(filesRef.current[id], scrollElementRef.current);
    };

    useEffect(() => {
        if (handleFileFouseRef) {
            handleFileFouseRef.current = handleFileFouse;
        }
    });

    return [...files].map((file, i) => (
        <Container
            key={file.id}
            onClick={onClick ? () => onClick(file) : null}
            classes={`shrink-0 ${classes.imageRoot || ''}`}
        >
            <Image 
                file={file}
                ImageRef={ref => filesRef.current[file.id] = ref}
                width={width}
                height={height}
                classes={(classes.image || '') as string}
            />
        </Container>
    ));
}

export default FilesList;