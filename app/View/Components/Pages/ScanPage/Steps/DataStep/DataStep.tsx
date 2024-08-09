// Tools
import React from "react";

// Coomplete components
// -- app
import TextInput from 'app/View/Components/Complete/MaterialDesign/Form/Input/TextInput';
import ReciptBorder from "app/View/Components/Complete/App/Widgets/ReciptBorder/ReciptBorder";
import TextAreaInput from "app/View/Components/Complete/MaterialDesign/Form/Input/TextAreaInput";

// Local components
import ScanMenu from "../../Components/ScanMenu/ScanMenu";

// Base components
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";

// Bootstrap components
import Fixed from "app/View/Bootstrap/Fixed/__DOM_DRIVER__";

function DataStep({ steper: { onMove, dataRef } }) {
    return (
        <Container
            classes="h-full flex flex-col"
        >
            <ReciptBorder classes="relative">
                <Container classes="mt-5">
                    <TextInput 
                        title="Company name *"
                        classes="mx-3"
                    />
                    <TextInput 
                        title="Price *"
                        classes="mx-3"
                    />
                    <TextAreaInput 
                        title="Note"
                        classes="mx-3"
                    />
                </Container>
            </ReciptBorder>
            <ScanMenu
                stepName="save"
                onClose={() => onMove('files')}
                onSave={() => {
                    console.log('blabla');
                    
                }}
            />
        </Container>
    );
}

const fixeClasses = 'top-0 left-0 right-0 bottom-0';

export default Fixed(DataStep, fixeClasses);