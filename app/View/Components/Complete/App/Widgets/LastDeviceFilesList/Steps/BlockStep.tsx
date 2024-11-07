// Tools
import React from "react";

// Base components
import Text from "app/View/Components/Bases/Components/Text/__DOM_DRIVER__";
import Title from "app/View/Components/Bases/Components/Title/__DOM_DRIVER__";
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";

// Complete components
// -- app 
import CommonButton from "app/View/Components/Complete/MaterialDesign/CommonButton/CommonButton";
// -- icons
import WarningIcon from "app/View/Components/Complete/MaterialDesign/Icons/Warning";

// client API
import { openAppSettings } from "app/View/Hooks/Files/drivers/__DOM_DRIVER__";

function BlockStep({ classes = '' }) {
    return (
        <Container 
            classes={`
                bg-gray-300 h-auto border border-black
                rounded-xl p-5 px-7 ${classes}
            `}
        >
            <Container classes="m-auto w-48">
                <Container classes="flex flex-row justify-center mb-2">
                    <WarningIcon 
                        classes="my-auto mr-2 w-5 h-5" 
                        fill="black"
                    />
                    <Title>
                        Access denied
                    </Title>
                </Container>
                <Text classes="text-center !text-sm">
                    Confirm access to photos to view them.
                </Text>
                {!openAppSettings && (
                    <Text classes="text-center !text-sm pt-2">
                        Open the settings of this site and allow access to camera.
                    </Text>
                )}
                {!!openAppSettings && (
                    <CommonButton
                        title="Open settings"
                        onClick={() => {
                            openAppSettings();
                        }}
                        type="filled"
                        classes={{
                            root: `
                                bg-white border border-1 border-black
                                m-auto mt-3 rounded-xl
                            `, 
                            title: '!text-black text-center',
                        }}
                    />
                )}
            </Container>
        </Container>
    );
}

export default BlockStep;