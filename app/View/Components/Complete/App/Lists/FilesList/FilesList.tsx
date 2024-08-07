// Tools
import React, { useEffect, useRef } from "react";

// Base components
import Image from "app/View/Components/Bases/Components/Image/__DOM_DRIVER__";
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";

// Apis
import Scroll from "app/View/Hooks/Scroll/Scroll";

function FilesList({ files, heightInObject = null, width = null, 
    classes = { image: '', imageRoot: '' }, glonalHeight = null, 
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

    return (
        <>
            {[...files].map((file, i) => {
                const id = file.id, 
                      url = file.url;

                width = width || "100%";                

                let height = heightInObject !== null ? file.height : null;
                height = height || glonalHeight || '100%';

                return (
                    <Container
                        key={id}
                        onClick={onClick ? () => onClick(file) : null}
                        width={width}
                        height={height}
                        classes={(classes.imageRoot || '') as string}
                    >
                        <Image 
                            src={url}
                            ref={ref => filesRef.current[id] = ref}
                            width={width}
                            // TODO - Fix that because there is images 
                            //        that its height is not the image container height!!
                            height={height} 
                            classes={(classes.image || '') as string}
                        />
                    </Container>
                );
            })}
        </>
    );
}

export default FilesList;