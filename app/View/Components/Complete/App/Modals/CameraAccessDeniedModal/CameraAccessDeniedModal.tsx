// Tools
import React from "react";

// Base Components
import Text from "app/View/Components/Bases/Components/Text/__DOM_DRIVER__";
import Title from "app/View/Components/Bases/Components/Title/__DOM_DRIVER__";
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";

// Complete components
// -- app
import CommonButton from "app/View/Components/Complete/MaterialDesign/CommonButton/CommonButton";
// -- icons
import CloseIcon from "app/View/Components/Complete/MaterialDesign/Icons/Close";
import WarningIcon from "app/View/Components/Complete/MaterialDesign/Icons/Warning";
import IconButton from "app/View/Components/Complete/MaterialDesign/IconButton/IconButton";
import { openAppSettings } from "app/View/Hooks/Files/drivers/__DOM_DRIVER__";
import Fixed from "app/View/Bootstrap/Fixed/__DOM_DRIVER__";

function CameraAccessDeniedModal({ onClose }) {
    return (
        <Container classes="h-full">
            <Container 
                classes="
                    bg-black opacity-25
                    h-full w-full
                    absolute
                "
                onClick={onClose}
            />
            <Container 
                classes="
                    flex justify-center align-items-center
                    h-full w-full m-auto
                    relative pointer-events-none
                "
            >
                <Container 
                    classes={`
                        bg-gray-300 border border-black
                        rounded-xl p-5 m-auto !mx-6 flex flex-col
                        pointer-events-auto
                    `}
                >
                    <Container classes="flex flex-row justify-between">
                        <Container classes="flex flex-row">
                            <WarningIcon 
                                classes="my-auto mx-2 w-6 h-6" 
                                fill="black"
                            />
                            <Title classes="my-auto m-2">
                                Access denied
                            </Title>
                        </Container>
                        <IconButton
                            classes={{
                                root: '!m-0 !p-2'
                            }}
                            onClick={onClose}
                            icon={() => {
                                return (
                                    <CloseIcon 
                                        classes=" w-5 h-5" 
                                        fill="black"
                                    />
                                );
                            }}
                        />
                    </Container>
                    <Text classes="!text-sm text-left !mt-2">
                        Confirm access to camera for take a picture.
                    </Text>
                    <Text classes="!text-sm text-left !mt-2">
                        Open the settings of this {openAppSettings ? 'app' : 'site'} and allow access to camera.
                    </Text>
                    <Container
                        classes={`
                            flex flex-row mt-6 mb-2
                            justify-${!openAppSettings ? 'center' : 'between'}
                        `}
                    >
                        <CommonButton
                            title="close"
                            onClick={onClose}
                            type="filled"
                            classes={{
                                root: `
                                    bg-white border border-1 border-black rounded-xl !m-0
                                `, 
                                title: '!text-black text-center',
                            }}
                        />
                        {!!openAppSettings && (
                            <CommonButton
                                title="Open settings"
                                onClick={() => {
                                    openAppSettings();
                                }}
                                type="filled"
                                classes={{
                                    root: `
                                        bg-white border border-1 border-black rounded-xl !m-0
                                    `, 
                                    title: '!text-black text-center',
                                }}
                            />
                        )}
                    </Container>
                </Container>
            </Container>
        </Container>
    );
}

const classes = 'top-0 bottom-0 left-0 right-0';

export default Fixed(CameraAccessDeniedModal, classes, false);