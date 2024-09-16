// Tools
import React, { useEffect, useRef, useState } from "react";

// Coomplete components
// -- app
import ReciptBorder from "app/View/Components/Complete/App/Widgets/ReciptBorder/ReciptBorder";

// Local components
import ScanMenu from "../../Components/ScanMenu/ScanMenu";

// Base components
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";

// Bootstrap components
import Fixed from "app/View/Bootstrap/Fixed/__DOM_DRIVER__";
import TextInput from "app/View/Components/Complete/MaterialDesign/Form/Input/TextInput";

function LinkStep({ steper: { onMove, dataRef } }) {
    
    const [photos, setPhotos] = useState([]);
    
    const inputsRef = useRef({
        link: null,
    });

    return (
        <Container
            classes="h-full flex flex-col"
        >
            <ReciptBorder classes="relative">
                <Container 
                    classes="overflow-y-auto px-2 pt-3" 
                >
                    <TextInput 
                        title="Link"
                        classes="mx-2"
                        inputRef={ref => inputsRef.current.link = ref}
                    />
                </Container>
            </ReciptBorder>
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