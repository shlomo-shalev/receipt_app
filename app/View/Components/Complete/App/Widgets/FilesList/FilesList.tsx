// Tools
import React, { useEffect, useState } from "react";

// Hooks
import useFilesList from "app/View/Hooks/Files/useFilesList";

// client API
import { openAppSettings } from "app/View/Hooks/Files/drivers/__DOM_DRIVER__";

// Base components
import Text from "app/View/Components/Bases/Components/Text/__DOM_DRIVER__";
import Space from "app/View/Components/Bases/Components/Space/__DOM_DRIVER__";
import Image from "app/View/Components/Bases/Components/Image/__DOM_DRIVER__";
import Title from "app/View/Components/Bases/Components/Title/__DOM_DRIVER__";
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";

// Complete Components - Material design
// -- app
import CommonButton from "app/View/Components/Complete/MaterialDesign/CommonButton/CommonButton";
// -- icons
import WarningIcon from "app/View/Components/Complete/MaterialDesign/Icons/Warning";

function FilesList({ classes = '' }) {
    const { waitPullFiles } = useFilesList();

    const [ state, setState ] = useState({
        files: [],
        status: 'wait',
    });

    const { files, status } = state;    

    useEffect(() => {
        const exportFiles = async function () {
            const { files, status } = await waitPullFiles;
            setState(state => ({
                ...state,
                files,
                status,
            }));
        }

        exportFiles();
    }, []);    

    return (
        <Container classes={`h-40 flex flex-row ${classes}`}>
            {files.length <= 0 && status === 'allow' && (
                <Container 
                    classes={`
                        bg-gray-300 h-auto w-44 border border-black
                        rounded-xl p-5 mr-5 ml-2 my-auto 
                    `}
                >
                    <Text>
                        There isn't images...
                    </Text>
                </Container>
            )}
            {files.map((file, i) => (
                <Container 
                    classes="m-1 border border-black"
                    key={`${i}:${file.uri}`}
                >
                    <Image 
                        src={file.uri} 
                        classes="h-full w-full"
                        width={90}
                    />
                </Container>
            ))}
            {status === 'blocked' && (
                <Container 
                    classes={`
                        bg-gray-300 h-auto w-auto border border-black
                        rounded-xl p-5 mr-5
                    `}
                >
                    <Container classes="m-auto w-48">
                        <Container classes="flex flex-row align-center">
                            <WarningIcon 
                                classes="my-auto mr-2 w-5 h-5" 
                                fill="black"
                            />
                            <Title classes="text-left">
                                Access denied
                            </Title>
                        </Container>
                        <Text classes="text-left !text-sm">
                            Confirm access to photos to view them.
                        </Text>
                        {!openAppSettings && (
                            <Text classes="text-left !text-sm pt-2">
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
                                        m-auto mt-3 ml-0 rounded-xl
                                    `, 
                                    title: '!text-black text-center',
                                }}
                            />
                        )}
                    </Container>
                </Container>
            )}
        </Container>
    );
}

export default FilesList;