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
// -- messages steps
import WaitStep from "./MessagesSteper/WaitStep";
import LoadingStep from "./MessagesSteper/LoadingStep";
import MessageStep from "./MessagesSteper/MessageStep";
import CompleteStep from "./MessagesSteper/CompleteStep";
// -- show steps
import ShowWaitStep from "./ShowSteper/ShowWaitStep";
import ShowPhotosStep from "./ShowSteper/ShowPhotosStep";
// -- widgets
import LinkInput from "./LinkInputAndProccess/LinkInput";

function LinkStep({ steper: { onMove } }) {
    
    const messagesSteperRef = useRef(null);
    const ShowSteperRef = useRef(null);
    const inputsRef = useRef({
        link: null,
    });

    const [photos, setPhotos] = useState([]);

    return (
        <Container
            classes="h-full flex flex-col"
        >
            <ReceiptBorder classes="relative">
                <Container 
                    classes="px-2 pt-3 flex flex-col overflow-y-scroll w-full"
                >
                    <Container>
                        <Steper 
                            default="wait"
                            steperRef={messagesSteperRef}
                        >
                            <Step 
                                step="wait"
                                component={WaitStep}
                            />
                            <Step 
                                step="loading"
                                component={LoadingStep}
                            />
                            <Step 
                                step="message"
                                component={MessageStep}
                            />
                            <Step 
                                step="completed"
                                component={CompleteStep}
                            />
                        </Steper>
                    </Container>
                    <LinkInput
                        inputRef={ref => inputsRef.current.link = ref}
                        onCompleted={({ photos }) => {
                            if (messagesSteperRef.current && ShowSteperRef.current) {
                                setPhotos(photos);
                                messagesSteperRef.current.onMove('completed');
                                ShowSteperRef.current.onMove('photos');
                            }
                        }}
                        onLoading={() => {
                            let availableToProccess = false;

                            if (messagesSteperRef.current) {
                                messagesSteperRef.current.onMove('loading');
                                availableToProccess = true;
                            }
                            
                            return availableToProccess;
                        }}
                    />
                    <Container classes="h-full">
                        <Steper 
                            default="wait"
                            steperRef={ShowSteperRef}
                        >
                            <Step 
                                step="wait"
                                component={ShowWaitStep}
                            />
                            <Step 
                                step="photos"
                                component={ShowPhotosStep}
                                props={{
                                    photos,
                                }}
                            />
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