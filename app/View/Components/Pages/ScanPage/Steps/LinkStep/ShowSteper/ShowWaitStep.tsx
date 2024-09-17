// Tools
import React from "react";

// Base components
import Text from "app/View/Components/Bases/Components/Text/__DOM_DRIVER__";
import Space from "app/View/Components/Bases/Components/Space/__DOM_DRIVER__";
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";

// Complete components
// -- icons
import PhotosIcon from "app/View/Components/Complete/MaterialDesign/Icons/Photos";

function ShowWaitStep() {
    return (
        <Container classes="flex items-center w-full pt-32">
            <PhotosIcon 
                fill="white"
                classes="h-16 w-16"
            />
            <Space />
            <Text classes="text-white text-center font-bold w-40">
                Photos of the page of your link will show here...
            </Text>
        </Container>
    );
}

export default ShowWaitStep;