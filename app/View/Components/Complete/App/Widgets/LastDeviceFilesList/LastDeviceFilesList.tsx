// Tools
import React, { useEffect, useState } from "react";

// Hooks
import useFilesList from "app/View/Hooks/Files/useFilesList";

// client API
import { openAppSettings } from "app/View/Hooks/Files/drivers/__DOM_DRIVER__";

// Base components
import Text from "app/View/Components/Bases/Components/Text/__DOM_DRIVER__";
import Image from "app/View/Components/Bases/Components/Image/__DOM_DRIVER__";
import Title from "app/View/Components/Bases/Components/Title/__DOM_DRIVER__";
import Skeleton from "app/View/Components/Bases/Components/Skeleton/__DOM_DRIVER__";
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";

// Complete Components - Material design
// -- app
import CommonButton from "app/View/Components/Complete/MaterialDesign/CommonButton/CommonButton";
// -- icons
import WarningIcon from "app/View/Components/Complete/MaterialDesign/Icons/Warning";

function LastDeviceFilesList({ classes = '', listClasses = '', onChoose }) {
    const { waitPullFiles } = useFilesList();

    const [ state, setState ] = useState({
        files: [],
        status: 'wait',
    });

    const { files, status } = state;        

    useEffect(() => {
        (async function () {
            const { files, status } = await waitPullFiles;
            setState(state => ({
                ...state,
                files,
                status,
            }));
        })()
    }, []);

    return (
        <Container classes={`flex flex-row justify-center w-full ${classes}`}>
            {files.length <= 0 && status === 'allow' && (
                <Container 
                    classes={`
                        bg-gray-300 h-auto border border-black
                        rounded-xl p-5 my-auto 
                    `}
                >
                    <Text>
                        There isn't images to show...
                    </Text>
                </Container>
            )}
            {(files.length > 0 || status == 'wait') && (
                <Container 
                    classes={`
                        overflow-x-auto scrollbar-none h-40 w-full
                        flex flex-row ${listClasses}
                    `}
                >
                    {status == 'wait' && (
                        ([...(new Array(5))]).map((v, i) => {
                            return (
                                <Container
                                    key={i}
                                    classes="mx-1"
                                >
                                    <Skeleton 
                                        width={90} 
                                        height={'100%'}
                                    />
                                </Container>
                            );
                        })
                    )}
                    {files.map(file => (
                        <Container 
                            key={`${file.id}`}
                            classes="m-1 border border-black cursor-pointer"
                            onClick={() => onChoose(file)}
                        >
                            <Image 
                                src={file.url}
                                width={90}
                                height="100%"
                            />
                        </Container>
                    ))}
                </Container>
            )}
            {status === 'blocked' && (
                <Container 
                    classes={`
                        bg-gray-300 h-auto border border-black
                        rounded-xl p-5 px-7
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
            )}
        </Container>
    );
}

export default LastDeviceFilesList;