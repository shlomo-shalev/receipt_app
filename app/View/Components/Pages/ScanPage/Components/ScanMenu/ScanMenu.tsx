// Tools
import React from "react";

// Base components
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

// Local components
// -- steps
import BaseMenuStep from "./Steps/BaseMenuStep";
import SaveDataMenuStep from "./Steps/SaveDataMenuStep";
import ChooseFilesMenuStep from "./Steps/ChooseFilesMenuStep";

// Complete components
// -- app
import Step from "app/View/Components/Complete/Steper/Step";
import Steper from "app/View/Components/Complete/Steper/Steper";

function ScanMenu({ 
    onClose, onSave = null, onTakePic = null, onNext = null, stepName,
    disabledes = {takePic: false, next: false} as {takePic?: Boolean, next?: Boolean} ,
}) {

    const baseProps = {disabledes, onClose};
    
    return (
        <Container 
            classes={`mt-auto flex justify-between flex-row py-5 px-7 bg-gray-600`}
        >
            <Steper default={stepName}>
                <Step 
                    step='base'
                    component={BaseMenuStep}
                    props={{
                        ...baseProps,
                        onNext,
                    }}
                />
                <Step 
                    step='takeFiles'
                    component={ChooseFilesMenuStep}
                    props={{
                        ...baseProps, 
                        onTakePic, 
                        onNext,
                    }}
                />
                <Step 
                    step='save'
                    component={SaveDataMenuStep}
                    props={{
                        ...baseProps,
                        onSave,
                    }}
                />
            </Steper>
        </Container>
    );
}

export default ScanMenu;