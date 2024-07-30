// Tools
import React, { useRef, useState } from "react";

// Base components
import Camera from "app/View/Components/Bases/Components/Camera/__DOM_DRIVER__";
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";

// Coomplete components
// -- app
import ReciptBorder from "app/View/Components/Complete/App/Widgets/ReciptBorder/ReciptBorder";

// Local components
import ScanMenu from "../../Components/ScanMenu/ScanMenu";

function CameraStep({ steper: { onMove, dataRef } }) {
    const [state, setState] = useState({
        takePictureButtonDisabled: true,
    });

    const takePictureRef = useRef(null);

    const elementDimensions = dataRef.current.elementDimensions;

    const { takePictureButtonDisabled } = state;

    return (
        <>
            <ReciptBorder>
                <Container classes="h-full">
                    <Camera 
                        takePictureRef={takePictureRef}
                        onStarted={() => {
                            setState(state => ({
                                ...state,
                                takePictureButtonDisabled: false,
                            }));
                        }}
                    />
                </Container>
            </ReciptBorder>
            <ScanMenu 
                onTakePic={async () => {
                    const photo = await takePictureRef.current();
                    
                    onMove('photos', {
                        photos: [photo],
                        elementDimensions,
                    });
                }}
                disabledes={{
                    takePic: takePictureButtonDisabled,
                    next: true,
                }}
                onClose={() => {
                    onMove('files');
                }}
            />
        </>
    );
}

export default CameraStep;