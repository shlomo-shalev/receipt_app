// Tools
import React from "react";

// Base components
import Image from "app/View/Components/Bases/Components/Image/__DOM_DRIVER__";

function FilesList({ files, height, width = null, 
    classes = { image: ''||null, } 
}) {
    return (
        <>
            {[...files].map((file, i) => {
                const url = file.url;

                return (
                    <Image 
                        key={`${url}:${i}`}
                        src={url}
                        width={width || "100%"}
                        height={height}
                        classes={(classes.image || '') as string}
                    />
                );
            })}
        </>
    );
}

export default FilesList;