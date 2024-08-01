// Tools
import React, { useEffect, useRef, useState } from "react";

// Coomplete components
// -- app
import ReciptBorder from "app/View/Components/Complete/App/Widgets/ReciptBorder/ReciptBorder";
// -- icons
import UpArrow from "app/View/Components/Complete/MaterialDesign/Icons/UpArrow";

// Local components
import ScanMenu from "../../Components/ScanMenu/ScanMenu";

// Base components
import Text from "app/View/Components/Bases/Components/Text/__DOM_DRIVER__";
import Image from "app/View/Components/Bases/Components/Image/__DOM_DRIVER__";
import Camera from "app/View/Components/Bases/Components/Camera/__DOM_DRIVER__";
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";

// Hooks
import useScrollToBottom from "app/View/Hooks/Scroll/useScrollToBottom";

// Apis
import Scroll from "app/View/Hooks/Scroll/Scroll";

function PhotosStep({ steper: { onMove, dataRef } }) {

    const [state, setState] = useState({
        takePictureButtonDisabled: true,
    });

    const [toBottomCount, setToBottomCount] = useState(0);

    const { takePictureButtonDisabled } = state;

    const [photos, setPhotos] = useState(dataRef.current.photos);

    const containerHeight = dataRef.current.elementDimensions.height;    

    const takePictureRef = useRef(null);

    const scrollRef = useScrollToBottom();

    useEffect(() => {
        if (toBottomCount > 0) {
            Scroll.toBottom(scrollRef);
        }
    }, [toBottomCount]);

    return (
        <>
            <ReciptBorder>
                <Container 
                    classes="overflow-y-auto" 
                    ref={scrollRef}
                >
                    {[...photos].map((photo, i) => {
                        const url = photo.url;

                        return (
                            <Image 
                                key={`${url}:${i}`}
                                src={url}
                                width="100%"
                                height={containerHeight}
                            />
                        );
                    })}
                    <Container
                        classes="relative"
                        style={{
                            height: containerHeight, 
                        }}
                    >
                        <Container
                            classes={`
                                text-center absolute top-0 left-0 right-0
                                z-10 cursor-pointer
                            `}
                            onClick={() => {
                                Scroll.toTop(scrollRef, true);
                            }}
                        >
                            <Container
                                classes={`
                                    m-auto w-54 bg-gray-600 px-5 pl-3.5 py-2
                                    border-b border-l border-r
                                    rounded-bl-xl rounded-br-xl
                                    flex flex-row justify-center
                                `}
                            >
                                <UpArrow
                                    fill="white" 
                                    classes="!h-3.5 my-auto"
                                />
                                <Text classes="text-center !text-sm !text-white font-bold ml-2">
                                    Scroll for show your images...
                                </Text>
                            </Container>
                        </Container>
                        <Container
                            style={{
                                height: containerHeight, 
                            }}
                        >
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
        </>
    );
}

export default PhotosStep;