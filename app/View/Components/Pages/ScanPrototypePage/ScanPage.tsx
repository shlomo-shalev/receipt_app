import React, { useEffect, useState } from 'react';

// Models
import localStorage from 'app/Models/LocalStorage/LocalStorage';
import { createLocalurl, dataURItoBlob } from 'app/Models/Blob/Blob';

// Steps
import ImageFocus from './Components/ImageFocus/ImageFocus';
import TakePicture from './Components/TakePicture/TakePicture';
import TextExtraction from './Components/TextExtraction/TextExtraction';

function ScanPage() {
    const localImageData = JSON.parse(localStorage.getItem('imageToScaning') || '{}');

    let startStep = localImageData?.data ? 2 : 1;
    startStep = localImageData?.cropData ? 3 : startStep;

    const defaultImage = {
        name: '',
        data: null,
        cropData: null,
        url: null,
    };

    const [state, setState] = useState({
        currentStep: null,
        image: {
            name: localImageData?.name || defaultImage.name,
            data: localImageData?.data || defaultImage.data,
            cropData: localImageData?.data || defaultImage.cropData,
            url: localImageData?.data 
                ? createLocalurl(dataURItoBlob(localImageData.data))
                : defaultImage.url,
        }
    });

    const { currentStep, image } = state;

    useEffect(() => {
        setState(state => ({
            ...state,
            currentStep: startStep,
        }));
    }, []);

    const setImageAndContinue = (name, data) => {
        const imageData = {
            name,
            data,
            cropData: null,
            url: createLocalurl(dataURItoBlob(data)),
        };

        setState(state => ({
            ...state,
            image: imageData,
            currentStep: 2,
        }));

        // localStorage.setItem('imageToScaning', JSON.stringify(imageData));
    };

    const hanldeRetakePucture = () => {
        setState(state => ({
            ...state,
            currentStep: 1,
            image: defaultImage,
        }));
        localStorage.removeItem('imageToScaning');
    };

    const setCropingImageAndContinue = (data, cropData) => {
        setState(state => {
            const imageData = {
                ...state.image,
                data,
                url: createLocalurl(dataURItoBlob(data)),
                cropData,
            };

            // localStorage.setItem('imageToScaning', JSON.stringify(imageData));

            return {
                ...state,
                currentStep: 3,
                image: imageData,
            };
        });
    };

    switch (currentStep) {
        case 3: 
            return (
                <TextExtraction 
                    image={image} 
                    hanldeRetakePucture={hanldeRetakePucture}
                />
            );
        case 2:
            return (
                <ImageFocus 
                    image={image}
                    key={2}
                    hanldeRetakePucture={hanldeRetakePucture}
                    setCropingImageAndContinue={setCropingImageAndContinue}
                />
            );
    
        case 1:
            return (
                <TakePicture 
                    setImageAndContinue={setImageAndContinue}
                    key={1}
                />
            );
    }
}

export default ScanPage;