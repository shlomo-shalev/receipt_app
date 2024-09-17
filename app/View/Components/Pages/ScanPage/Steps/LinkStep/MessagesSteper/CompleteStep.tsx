// Tools
import React from "react";

// Base components
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";
import Text from "app/View/Components/Bases/Components/Text/__DOM_DRIVER__";

// Complete components
// -- icons
import ContinueIcon from "app/View/Components/Complete/MaterialDesign/Icons/Continue";

function CompleteStep() {
    return (
        <Container classes="flex justify-center items-center w-full pt-10">
            <Container classes="flex flex-row">
                <ContinueIcon
                    fill="white"
                    classes="h-16 w-16 my-auto"
                />
                <Container classes="ml-10 my-auto">
                    <Text classes="text-white font-bold w-40 mb-1">
                        The converting completed
                    </Text>
                </Container>
            </Container>
        </Container>
    );
}

export default CompleteStep;