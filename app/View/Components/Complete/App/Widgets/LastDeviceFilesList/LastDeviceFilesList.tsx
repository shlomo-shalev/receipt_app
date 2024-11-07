// Tools
import React from "react";

// Base components
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";

// Complete Components - Material design
// -- app
import Step from "app/View/Components/Complete/Steper/Step";
import Steper from "app/View/Components/Complete/Steper/Steper";

// Local components
import LoadStep from "./Steps/LoadStep";
import EmptyStep from "./Steps/EmptyStep";
import FilesStep from "./Steps/FilesStep";
import BlockStep from "./Steps/BlockStep";

function LastDeviceFilesList({ classes = '', listClasses = '', onChoose }) {
    return (
        <Container classes={`flex flex-row justify-center w-full ${classes}`}>
            <Steper default="load">
                <Step 
                    step="load"
                    component={LoadStep}
                    props={{
                        classes: listClasses,
                    }}
                />
                <Step 
                    step="empty"
                    component={EmptyStep}
                />
                <Step 
                    step="files"
                    component={FilesStep}
                    props={{
                        classes: listClasses,
                        onChoose,
                    }}
                />
                <Step 
                    step="block"
                    component={BlockStep}
                />
            </Steper>
        </Container>
    );
}

export default LastDeviceFilesList;