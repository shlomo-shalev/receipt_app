// Tools
import React from "react";

// Base components
import Text from "app/View/Components/Bases/Components/Text/__DOM_DRIVER__";
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

// Coomplete components
// app
import FilesList from "app/View/Components/Complete/App/Widgets/FilesList/FilesList";
import CommonButton from "app/View/Components/Complete/MaterialDesign/CommonButton/CommonButton";
// icons
import ScanIcon from "app/View/Components/Complete/MaterialDesign/Icons/Scan";
import UploadIcon from "app/View/Components/Complete/MaterialDesign/Icons/Upload";
import CameraIcon from "app/View/Components/Complete/MaterialDesign/Icons/Camera";

function ScanPage() {
    return (
        <Container classes="mt-5 !mx-7 flex-1 relative">
            <Container
                classes={`
                    border absolute left-0 bottom-0 top-0 right-0 border-black 
                    rounded-t-3xl border-b-0
                `}
            >
                <Container
                    classes="
                        border-8 absolute left-0 bottom-0 top-0 right-0 border-white 
                        rounded-t-3xl p-5 border-b-0 flex items-center flex-col
                    "
                >
                    <Container
                        classes={`
                            border absolute left-0 bottom-0 top-0 right-0 border-black 
                            rounded-t-2xl border-b-0 flex items-center flex-col overflow-hidden
                        `}
                    >
                        {/* <Camera 
                            takePictureRef={() => {}}
                        /> */}
                        <Container classes="m-auto w-full flex flex-col">
                            <ScanIcon
                                fill="black"
                                classes="!w-20 !h-20 m-auto"
                            />
                            <Text
                                classes="!text-black font-bold text-base text-center pb-3 !mb-3"
                            >
                                Scan a receipt or invoice
                            </Text>
                            <Container 
                                classes="flex flex-row overflow-x-scroll scrollbar-none"
                            >
                                <FilesList 
                                    beforeList={(
                                        <Container classes="flex flex-col justify-between h-full">
                                            <CommonButton
                                                title="Camera"
                                                icon={({ classes }) => (
                                                    <CameraIcon
                                                        fill="black"
                                                        classes={`${classes} !w-4 !h-4`}
                                                    />
                                                )}
                                                type="filled"
                                                classes={{
                                                    root: `
                                                        bg-white py-4 border border-1 border-black
                                                        rounded-full 
                                                    `, 
                                                    title: '!text-black text-center',
                                                }}
                                            />
                                            <CommonButton
                                                title="Upload"
                                                icon={({ classes }) => (
                                                    <UploadIcon
                                                        classes={`${classes} w-4 h-4`}
                                                        fill="black"
                                                    />
                                                )}
                                                type="filled"
                                                classes={{
                                                    root: `
                                                        rounded-full py-4 border border border-black 
                                                        h-14 w-30 flex-col !mx-4 !flex-row bg-white
                                                    `,
                                                    title: '!text-black text-center',
                                                }}
                                            />
                                        </Container>
                                    )}
                                    classes={{
                                        root: 'm-auto',
                                        sub: 'h-full',
                                    }}
                                />
                            </Container>
                        </Container>
                    </Container>
                </Container>
            </Container>
        </Container>
    );
}

export default ScanPage;