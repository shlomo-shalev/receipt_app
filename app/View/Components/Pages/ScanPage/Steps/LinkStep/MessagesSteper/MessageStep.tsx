// Tools
import React from "react";

// Base components
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";
import Text from "app/View/Components/Bases/Components/Text/__DOM_DRIVER__";

// Complete components
// -- icons
import WarningIcon from "app/View/Components/Complete/MaterialDesign/Icons/Warning";
// --- app
import CommonButton from "app/View/Components/Complete/MaterialDesign/CommonButton/CommonButton";
import Space from "app/View/Components/Bases/Components/Space/__DOM_DRIVER__";

function MessageStep({ steper: { dataRef: { current: { message } } } }) {
    return (
        <Container classes="flex justify-center items-center w-full pt-10">
            <Container classes="flex flex-row">
                <WarningIcon 
                    fill="white"
                    classes="h-16 w-16 my-auto"
                />
                <Container classes="ml-10 my-auto">
                    <Text classes="text-white font-bold w-40 mb-1">
                        There is problem
                    </Text>
                    <Text classes="text-white w-40">
                        {message || 'Unknown'}
                    </Text>
                    <Space />
                    <CommonButton
                        type="filled"
                        title="Try again"
                        classes={{
                            root: `!rounded-2xl ml-0 bg-white border`,
                        }}
                        // onClick={() => null}
                    />
                </Container>
            </Container>
        </Container>
    );
}

export default MessageStep;