import React from "react";

// Base components
import Space from "app/View/Components/Bases/Components/Space/__DOM_DRIVER__";
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";

// Complate components
import Camera from "app/View/Components/Complete/Camera/Camera";
import CommonButton from "app/View/Components/Complete/MaterialDesign/CommonButton/CommonButton";

function ByCamera({ takePictureRef, setImageAndContinue }) {
    return (
        <Container>
            <Camera 
                takePictureRef={takePictureRef}
            />
            <Space />
            <CommonButton 
                type="filled"
                title={'Take picture'}
                onClick={() => {
                    const image = takePictureRef.current();

                    // TO DO Not Now - We need convert the image to png file, if the file is not png.

                    setImageAndContinue(Date.now(), image);
                }}
            />
        </Container>
    );    
}

export default ByCamera;