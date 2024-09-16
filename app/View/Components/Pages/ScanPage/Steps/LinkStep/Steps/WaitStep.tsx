// Tools
import React from "react";

// Base components
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";
import Text from "app/View/Components/Bases/Components/Text/__DOM_DRIVER__";

// Complete components
// -- icons
import LinkIcon from "app/View/Components/Complete/MaterialDesign/Icons/Link";

function WaitStep() {
    return (
        <Container classes="flex justify-center items-center w-full pt-10">
            <Container classes="flex flex-row">
                <LinkIcon 
                    fill="white"
                    classes="h-16 w-16"
                />
                <Container classes="ml-10 my-auto">
                    <Text classes="text-white font-bold w-40">
                        Set link for export your reciept or invoice
                    </Text>
                </Container>
            </Container>
        </Container>
    );
}

export default WaitStep;