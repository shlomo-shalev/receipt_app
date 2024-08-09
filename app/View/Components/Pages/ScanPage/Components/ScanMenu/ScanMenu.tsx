// Tools
import React from "react";

// Base components
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

// Local components
// -- steps
import SaveDataMenuStep from "./Steps/SaveDataMenuStep";
import ChooseFilesMenuStep from "./Steps/ChooseFilesMenuStep";

// Coomplete components
// -- app
import Step from "app/View/Components/Complete/Steper/Step";
import Steper from "app/View/Components/Complete/Steper/Steper";

function ScanMenu({ 
    onClose, onSave = null, onTakePic = null, onNext = null, stepName,
    disabledes = {takePic: false, next: false} as {takePic?: Boolean, next?: Boolean} ,
}) {
    return (
        <Container 
            classes={`mt-auto flex justify-between flex-row py-5 px-7 bg-gray-400`}
        >
            <Steper default={stepName}>
                <Step 
                    component={ChooseFilesMenuStep}
                    props={{
                        onClose,
                        onTakePic,
                        onNext,
                        disabledes,
                    }}
                    step='takeFiles'
                />
                <Step 
                    component={SaveDataMenuStep}
                    props={{
                        onClose,
                        onSave
                    }}
                    step='save'
                />
            </Steper>
        </Container>
    );
}

export default ScanMenu;