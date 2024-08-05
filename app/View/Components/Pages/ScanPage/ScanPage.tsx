// Tools
import React from "react";

// Base components
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";

// Coomplete components
// -- app
import Step from "app/View/Components/Complete/Steper/Step";
import Steper from "app/View/Components/Complete/Steper/Steper";

// Local components
// -- steps
import FilesStep from "app/View/Components/Pages/ScanPage/Steps/FilesStep/FilesStep";
import CameraStep from "app/View/Components/Pages/ScanPage/Steps/CameraStep/CameraStep";
import PhotosStep from "app/View/Components/Pages/ScanPage/Steps/PhotosStep/PhotosStep";

function ScanPage() {
    return (
        <Container classes="h-full">
            <Steper default="files">
                <Step 
                    step="files"
                    component={FilesStep}
                />
                <Step 
                    step="camera"
                    component={CameraStep}
                />
                <Step 
                    step="photos"
                    component={PhotosStep}
                />
            </Steper>
        </Container>
    );
}

export default ScanPage;