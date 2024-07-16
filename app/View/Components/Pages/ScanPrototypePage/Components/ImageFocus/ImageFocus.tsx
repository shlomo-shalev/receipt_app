import React, { useEffect, useRef, useState } from "react";

import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-backend-webgl';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import 'cropperjs/dist/cropper.css';
import Cropper from 'cropperjs';

// Base components
import Image from "app/View/Components/Bases/Components/Image/__DOM_DRIVER__";
import Title from "app/View/Components/Bases/Components/Title/__DOM_DRIVER__";
import Space from "app/View/Components/Bases/Components/Space/__DOM_DRIVER__";
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";

// Complate components
import CommonButton from "app/View/Components/Complete/MaterialDesign/CommonButton/CommonButton";

const ImageFocus = ({ image, hanldeRetakePucture, setCropingImageAndContinue }) => {
    
    const imageRef = useRef(null);
    const customCropperRef = useRef(null);
    const imageToCropRef = useRef(null);

    const [state, setState] = useState({
        box: {
            top: 0,
            left: 0,
            width: null,
            height: null,
        },
    });

    useEffect(() => {
        
        customCropperRef.current = new Cropper(imageRef.current, {
            dragMode: 'none',
            highlight: false,
            responsive: false,
            scalable: true,
            autoCrop: true,
            center: false,
            background: false,
            zoomable: false,
            zoomOnWheel: false,
            data: {
                x: state.box.left,
                y: state.box.top,
                width: state.box.width || 10_000,
                height: state.box.height || 10_000,
            },
            crop: function({ detail }) {
                setState(state => ({
                    ...state,
                    box: {
                        top: detail.y,
                        left: detail.x,
                        width: detail.width,
                        height: detail.height,
                    }
                }));
            }
        });

        handleMainImageObject();
    }, []);
    
    const handleMainImageObject = async () => {
        const model = await cocoSsd.load();

        const img = imageToCropRef.current;

        let predictions = await model.detect(img);
        

        predictions = predictions.filter(prediction => prediction.class === 'book');

        const originalBox = predictions[0]?.bbox || {};

        // (predictions[0].score * 100).toFixed(2)
        // predictions[0].class

        const box = {
            top: originalBox[1] || 0,
            left: originalBox[0] || 0,
            width: originalBox[2] || img.width, 
            height: originalBox[3] || img.height, 
        };        
        
        customCropperRef.current.setCropBoxData({
            top: box.top, 
            left: box.left,
            width: box.width, 
            height: box.height,
        });

        setState(state => ({
            ...state,
            box,
        }));
    }

    const next = () => {
        const croppedimage = customCropperRef.current.getCroppedCanvas()
            .toDataURL("image/png");

        const cropData = {
            top: state.box.top,
            left: state.box.left,
            width: state.box.width,
            height: state.box.height,
            original: image,
        };
        setCropingImageAndContinue(croppedimage, cropData);
    };

    return (
        <Container classes="flex flex-col justify-center m-10">
            <Title>
                Step 2 - Choose area from the image to scan.
            </Title>
            <Space />
            <Container classes="mb-3">
                <Container classes="relative">
                    <Image 
                        src={image.url}
                        ref={imageToCropRef}
                        style={{
                            visibility: 'hidden',
                        }}
                    />
                    <Container classes="absolute top-0 z-">
                        <Image 
                            src={image.url}
                            ref={imageRef}
                        />
                    </Container>
                </Container>
                <Container classes="flex justify-between">
                    <CommonButton 
                        type="filled"
                        title={'Retake picture'}
                        classes={{
                            root: "mx-0 mt-5 bg-red-600"
                        }}
                        onClick={() => hanldeRetakePucture()}
                    />
                    <CommonButton 
                        type="filled"
                        title={'Next'}
                        classes={{
                            root: "mx-0 mt-5"
                        }}
                        onClick={() => next()}
                    />
                </Container>
            </Container>
        </Container>
    );
}

export default ImageFocus;