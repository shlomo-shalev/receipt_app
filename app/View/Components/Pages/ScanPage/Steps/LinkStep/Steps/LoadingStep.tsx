// Tools
import React from "react";

// Base components
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";

// Complete components
// -- app
import LoadingIcon from "app/View/Components/Complete/MaterialDesign/Icons/Loading";
import Text from "app/View/Components/Bases/Components/Text/__DOM_DRIVER__";
import Title from "app/View/Components/Bases/Components/Title/__DOM_DRIVER__";

function LoadingStep() {
    return (
        <Container classes="flex justify-center items-center w-full pt-10">
            <Container classes="flex flex-row">
                <LoadingIcon 
                    width={70}
                    height={70}
                />
                <Container classes="ml-10 my-auto">
                    <Text classes="text-white font-bold">
                        Convert to images
                    </Text>
                    <Text classes="text-white w-44">
                        we convert the page to images.
                    </Text>
                </Container>
            </Container>
        </Container>
    );
}

export default LoadingStep;