// Tools
import React, { useEffect, useRef, useState } from "react";

// Complete components
// -- app
import FilesList from "app/View/Components/Complete/App/Lists/FilesList/FilesList";
import ReceiptBorder from "app/View/Components/Complete/App/Widgets/ReceiptBorder/ReceiptBorder";

// Local components
import ScanMenu from "app/View/Components/Pages/ScanPage/Components/ScanMenu/ScanMenu";

// Base components
import Camera from "app/View/Components/Bases/Components/Camera/__DOM_DRIVER__";
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";

// Hooks
import useScrollToBottom from "app/View/Hooks/Scroll/useScrollToBottom";

// Bootstrap components
import Fixed from "app/View/Bootstrap/Fixed/__DOM_DRIVER__";

function PhotosStep({ steper: { onMove, dataRef } }) {

    const [state, setState] = useState({
        takePictureButtonDisabled: true,
    });

    const { takePictureButtonDisabled } = state;

    const [photos, setPhotos] = useState(dataRef.current.photos);
    
    const containerHeight = dataRef.current.elementDimensions.height;    
    const containerWidth = dataRef.current.elementDimensions.width;    

    const takePictureRef = useRef(null);
    const handleFileFouseRef = useRef(null);

    const scrollRef = useScrollToBottom();
    
    return (
        <Container
            classes="h-full flex flex-col"
        >
            <ReceiptBorder classes="relative">
                <Container 
                    classes="overflow-y-auto" 
                    ref={scrollRef}
                >
                    <FilesList 
                        files={photos}
                        height={'auto'}
                        width={'100%'}
                        handleFileFouseRef={handleFileFouseRef}
                    />
                    <Container 
                        classes="relative"
                        style={{
                            height: containerHeight, 
                        }}
                    >
                        <Container classes="h-full">
                            {/* TODO - The camera crashes sometimes. */}
                            <Camera 
                                takePictureRef={takePictureRef}
                                height={containerHeight - 100}
                                width={containerWidth}
                                onStarted={() => {
                                    setState(state => ({
                                        ...state,
                                        takePictureButtonDisabled: false,
                                    }));
                                }}
                            />
                        </Container>
                    </Container>
                </Container>
                <Container classes="absolute bottom-0">
                    <Container classes="m-2 overflow-x-scroll scrollbar-none">
                        <Container classes="h-20 flex flex-row">
                            <FilesList 
                                files={photos}
                                classes={{
                                    imageRoot: 'border mx-2',
                                    image: '',
                                }}
                                onClick={file => {
                                    handleFileFouseRef.current(file.id, scrollRef);
                                }}
                            />
                        </Container>
                    </Container>
                </Container>
            </ReceiptBorder>
            <ScanMenu 
                stepName="takeFiles"
                disabledes={{
                    takePic: takePictureButtonDisabled,
                    next: false,
                }}
                onClose={() => {
                    onMove('files');
                }}
                onNext={() => {
                    onMove('data', {
                        photos,
                        elementDimensions: dataRef.current.elementDimensions,
                    });
                }}
                onTakePic={async () => {
                    const photo = await takePictureRef.current();
                    
                    setPhotos(photos => ([
                        ...photos,
                        {
                            ...photo,
                            height: containerHeight - 100,
                        },                       
                    ]));
                }}
            />
        </Container>
    );
}

const fixeClasses = 'top-0 left-0 right-0 bottom-0';

export default Fixed(PhotosStep, fixeClasses);