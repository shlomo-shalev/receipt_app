// Tools
import React, { useRef, useState } from "react";

// Bootstrap components
import Fixed from "app/View/Bootstrap/Fixed/__DOM_DRIVER__";

// Base components
import Camera from "app/View/Components/Bases/Components/Camera/__DOM_DRIVER__";
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";

// Coomplete components
// -- app
import ReciptBorder from "app/View/Components/Complete/App/Widgets/ReciptBorder/ReciptBorder";

// Local components
import ScanMenu from "../../Components/ScanMenu/ScanMenu";
import Text from "app/View/Components/Bases/Components/Text/__DOM_DRIVER__";

function CameraStep({ steper: { onMove, dataRef } }) {
    const [state, setState] = useState({
        takePictureButtonDisabled: true,
    });    

    const takePictureRef = useRef(null);

    const elementDimensions = dataRef.current.elementDimensions;

    const { takePictureButtonDisabled } = state;

    return (
        <Container 
            classes="h-full flex flex-col"
        >
            <ReciptBorder>
                <Container classes="h-full">
                    <Camera 
                        takePictureRef={takePictureRef}
                        height={elementDimensions.height}
                        width={elementDimensions.width}
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
                        photos: [{
                            ...photo,
                            height: elementDimensions.height - 100,
                        }],
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
        </Container>
    );
}

const fixeClasses = 'top-0 left-0 right-0 bottom-0';

export default Fixed(CameraStep, fixeClasses);