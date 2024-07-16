import React, { useEffect, useRef } from "react";

// Base components
import Title from "app/View/Components/Bases/Components/Title/__DOM_DRIVER__";
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";

// Complate components
import CommonButton from "app/View/Components/Complete/MaterialDesign/CommonButton/CommonButton";
    // Icons
    import UploadIcon from "app/View/Components/Complete/MaterialDesign/Icons/Upload";

function ByUploding({ setImageAndContinue }) {
    const inputRef = useRef(null);

    useEffect(() => {
        window.addEventListener('dragover', e => e.preventDefault());
        window.addEventListener('drop', function(e) {
            e.preventDefault();

            const file = e.dataTransfer.files[0];
            
            if (file) handleGetFile(file);
        });
    }, []);

    const handleGetFile = async file => {
        // const file = inputRef.current.files[0];

        if (!file) return;

        var fileReader = new FileReader();

        fileReader.onload = function(fileLoadedEvent) 
        {
            setImageAndContinue(Date.now(), fileLoadedEvent.target.result);

            // TO DO Not Now - We need convert the image to png file, if the file is not png.
            // https://stackoverflow.com/questions/46754688/convert-heic-to-jpg-using-php-or-js
        };

        fileReader.readAsDataURL(file);
    };

    return (
        <Container>
             <input 
                type='file'
                style={{display: 'none'}}
                ref={inputRef}
                onChange={e => handleGetFile(inputRef.current.files[0])}
             />
             <CommonButton 
                type="outlined"
                icon={() => <UploadIcon classes="fill-blue-600" />}
                classes={{
                    root: 'h-40 w-full flex-row-reverse border-2 !border-blue-600',
                    title: '!text-base !text-blue-600 font-bold'
                }}
                title="Select file"
                onClick={() => {
                    inputRef.current.click();
                }}
            />
        </Container>
    );    
}

export default ByUploding;