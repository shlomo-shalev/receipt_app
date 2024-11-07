// Tools
import React from "react";

// Base components
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";

// Complete components
// -- app
import Image from "app/View/Components/Complete/MaterialDesign/Image/Image";

function FilesStep({ steper: { dataRef }, classes = '', onChoose }) {
    const files = dataRef.current.files;

    return (
        <Container 
            classes={`
                overflow-x-auto scrollbar-none h-40 w-full
                flex flex-row ${classes}
            `}
        >
            {files.map(file => (
                <Container 
                    key={`${file.id}`}
                    classes="m-1 border border-black cursor-pointer"
                    onClick={() => onChoose(file)}
                >
                    <Image 
                        file={file}
                        width={90}
                        height="100%"
                    />
                </Container>
            ))}
        </Container>
    );
}

export default FilesStep;