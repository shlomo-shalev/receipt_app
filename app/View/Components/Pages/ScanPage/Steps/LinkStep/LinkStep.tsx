// Tools
import React, { useRef, useState } from "react";

// Complete components
// -- app
import Step from "app/View/Components/Complete/Steper/Step";
import Steper from "app/View/Components/Complete/Steper/Steper";
import ReceiptBorder from "app/View/Components/Complete/App/Widgets/ReceiptBorder/ReceiptBorder";

// Local components
import ScanMenu from "app/View/Components/Pages/ScanPage/Components/ScanMenu/ScanMenu";

// Base components
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";

// Bootstrap components
import Fixed from "app/View/Bootstrap/Fixed/__DOM_DRIVER__";
import TextInput from "app/View/Components/Complete/MaterialDesign/Form/Input/TextInput";

// Local components
// -- steps
import WaitStep from "./Steps/WaitStep";
import LoadingStep from "./Steps/LoadingStep";

function LinkStep({ steper: { onMove, dataRef } }) {
    
    const [photos, setPhotos] = useState([]);
    
    const inputsRef = useRef({
        link: null,
    });

    return (
        <Container
            classes="h-full flex flex-col"
        >
            <ReceiptBorder classes="relative">
                <Container 
                    classes="px-2 pt-3 flex flex-col"
                >
                    <TextInput 
                        title="Link"
                        classes="mx-2"
                        inputRef={ref => inputsRef.current.link = ref}
                    />
                    <Container>
                        <Steper default="wait">
                            <Step 
                                step="wait"
                                component={WaitStep}
                            />
                            <Step 
                                step="loading"
                                component={LoadingStep}
                            />
                            {/* <Step 
                                step="message"
                                component={}
                            />
                            <Step 
                                step="photos"
                                component={}
                            /> */}
                        </Steper>
                    </Container>
                </Container>
            </ReceiptBorder>
            <ScanMenu 
                stepName="base"
                disabledes={{
                    next: photos.length <= 0,
                }}
                onClose={() => {
                    onMove('files');
                }}
                onNext={() => {
                    // onMove('data', {
                    //     photos,
                    //     elementDimensions: dataRef.current.elementDimensions,
                    // });
                }}
            />
        </Container>
    );
}

const fixeClasses = 'top-0 left-0 right-0 bottom-0';

export default Fixed(LinkStep, fixeClasses);