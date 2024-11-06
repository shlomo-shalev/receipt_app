// Tools
import React from "react";

// Base components
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

// Complete components
// -- app
import Step from "app/View/Components/Complete/Steper/Step";
import Steper from "app/View/Components/Complete/Steper/Steper";

// Local components
// -- steps
import LoadStep from "./Steps/LoadStep";
import ImageStep from "./Steps/ImageStep";

function Image(
    { file, height = 'auto', width = 'auto', classes = '', ImageRef = null }: 
    {width?: string|number, height?: string|number, classes?: string, file, ImageRef?}
) {
    const metaData = {
        file, height, ImageRef,
        width, classes,
    };

    return (
        <Container classes="h-full">
            <Steper default="load">
                <Step 
                    step="load"
                    component={LoadStep}
                    props={metaData}
                />
                <Step 
                    step="image"
                    component={ImageStep}
                    props={metaData}
                />
            </Steper>
        </Container>
    );
}

export default Image;