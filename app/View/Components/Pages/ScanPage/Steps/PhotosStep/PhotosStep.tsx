// Tools
import React, { useEffect, useRef, useState } from "react";

// Coomplete components
// -- app
import FilesList from "app/View/Components/Complete/App/Lists/FilesList/FilesList";
import ReciptBorder from "app/View/Components/Complete/App/Widgets/ReciptBorder/ReciptBorder";

// Local components
import ScanMenu from "../../Components/ScanMenu/ScanMenu";

// Base components
import Camera from "app/View/Components/Bases/Components/Camera/__DOM_DRIVER__";
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";

// Hooks
import useScrollToBottom from "app/View/Hooks/Scroll/useScrollToBottom";

// Apis
import Scroll from "app/View/Hooks/Scroll/Scroll";

function PhotosStep({ steper: { onMove, dataRef } }) {

    const [state, setState] = useState({
        takePictureButtonDisabled: false,
    });

    const [toBottomCount, setToBottomCount] = useState(0);

    const { takePictureButtonDisabled } = state;

    const [photos, setPhotos] = useState(dataRef.current.photos);
    
    const containerHeight = dataRef.current.elementDimensions.height;    
    const containerWidth = dataRef.current.elementDimensions.width;    

    const takePictureRef = useRef(null);

    const scrollRef = useScrollToBottom(0);

    useEffect(() => {
        if (toBottomCount > 0) {
            Scroll.toBottom(scrollRef);
        }
    }, [toBottomCount]);

    return (
        <Container
            classes="fixed top-0 bottom-0 left-0 right-0 h-full flex flex-col"
        >
            <ReciptBorder classes="relative">
                <Container 
                    classes="overflow-y-auto scrollbar-none" 
                    ref={scrollRef}
                >
                    <FilesList 
                        height={containerHeight}
                        files={photos}
                    />
                    <Container 
                        classes="relative"
                        style={{
                            height: containerHeight, 
                        }}
                    >
                        <Container classes="h-full">
                            <Camera 
                                takePictureRef={takePictureRef}
                                height={containerHeight - 100}
                                width={containerWidth}
                                onStarted={() => {
                                    console.log('ww');

                                    if (takePictureButtonDisabled) {
                                        setState(state => ({
                                            ...state,
                                            takePictureButtonDisabled: false,
                                        }));
                                    }
                                }}
                            />
                        </Container>
                    </Container>
                </Container>
                <Container classes="absolute bottom-0">
                    <Container classes="m-2 overflow-x-scroll scrollbar-none">
                        <Container classes="h-20 flex flex-row">
                            <FilesList 
                                height={'auto'}
                                files={photos}
                                classes={{
                                    image: 'mx-1',
                                }}
                                width={50}
                            />
                        </Container>
                    </Container>
                </Container>
            </ReciptBorder>
            <ScanMenu 
                disabledes={{
                    takePic: takePictureButtonDisabled,
                    next: false,
                }}
                onClose={() => {
                    onMove('files');
                }}
                onTakePic={async () => {
                    const photo = await takePictureRef.current();
                    
                    setPhotos(photos => ([
                        ...photos,
                        photo,
                    ]));
                    setToBottomCount(count => count + 1);
                }}
            />
        </Container>
    );
}

export default PhotosStep;