import React, { useRef, useState } from "react";

// Base components
import Title from "app/View/Components/Bases/Components/Title/__DOM_DRIVER__";
import Space from "app/View/Components/Bases/Components/Space/__DOM_DRIVER__";
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";

// Complate components
import CommonButton from "app/View/Components/Complete/MaterialDesign/CommonButton/CommonButton";

// Helpers components
import ByCamera from "./Components/ByCamera/ByCamera";
import ByUploding from "./Components/ByUploding/ByUploding";

function TakePicture({ setImageAndContinue }) {
    const takePictureRef = useRef(null);

    const [state, setState] = useState({
        currentStep: 1,
    });
    
    const { currentStep } = state;

    const changeStep = (newStep) => {
        setState(state => ({
            ...state,
            currentStep: newStep,
        }));
    };

    return (
        <Container classes="flex flex-col justify-center m-10">
            <Title>
                Step 1 - Take a picture.
            </Title>
            <Space />
            <Container classes="mb-3">
                <CommonButton 
                    type="filled"
                    title={'Camera'}
                    onClick={() => changeStep(2)}
                    classes={{
                        root: `${currentStep == 2 ? '!bg-blue-600' : '!bg-blue-200'}`,
                    }}
                />
                <CommonButton 
                    type="filled"
                    title={'Upload'}
                    classes={{
                        root: `ms-2 ${currentStep != 1 ? '!bg-blue-200' : ''}`,
                    }}
                    onClick={() => changeStep(1)}
                />
            </Container>
            {currentStep == 2 && (
                <ByCamera 
                    takePictureRef={takePictureRef}
                    setImageAndContinue={setImageAndContinue}
                /> 
            )}
            {currentStep == 1 && (
                <ByUploding 
                    setImageAndContinue={setImageAndContinue}
                /> 
            )}
        </Container>
    );
}

export default TakePicture;