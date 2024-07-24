// Tools
import React from "react";

// Base components
import Camera from "app/View/Components/Bases/Components/Camera/__DOM_DRIVER__";
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";

// Coomplete components
// -- app
import ReciptBorder from "app/View/Components/Complete/App/Widgets/ReciptBorder/ReciptBorder";

// Local components
import ScanMenu from "./Components/ScanMenu/ScanMenu";

function CameraStep({ steper: { onMove } }) {
    return (
        <>
            <ReciptBorder>
                <Container classes="h-full">
                    <Camera 
                        takePictureRef={() => {}}
                    />
                </Container>
            </ReciptBorder>
            <ScanMenu 
                onClose={() => {
                    onMove('files');
                }}
            />
        </>
    );
}

export default CameraStep;