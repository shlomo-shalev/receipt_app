// Tools
import React, { useState } from "react";

// Hooks
import useCamera from "app/View/Hooks/Camera/useCamera";

// Base components
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';
import FileInput from 'app/View/Components/Bases/Components/FileInput/__DOM_DRIVER__';

// Coomplete components
// -- app
import CommonButton from "app/View/Components/Complete/MaterialDesign/CommonButton/CommonButton";
// --- modals
import CameraAccessDeniedModal from "app/View/Components/Complete/App/Modals/CameraAccessDeniedModal/CameraAccessDeniedModal";
// -- icons
import UploadIcon from "app/View/Components/Complete/MaterialDesign/Icons/Upload";
import CameraIcon from "app/View/Components/Complete/MaterialDesign/Icons/Camera";


function GetFilesMenu({ onUpload, moveToCamera }) {
    const [showCameraModal, setShowCameraModal] = useState(false);

    const { requestPermisstion, exists: CameraExists } = useCamera();

    return (
        <Container 
            classes="flex flex-row justify-center"
        >
            <Container>
                <CommonButton
                    title="Camera"
                    icon={({ classes }) => (
                        <CameraIcon
                            fill="black"
                            classes={`${classes} !w-4 !h-4`}
                        />
                    )}
                    disabled={!CameraExists}
                    onClick={async () => {
                        const allow = await requestPermisstion();
                        
                        if (allow) {
                            moveToCamera();
                        }
                        else {
                            setShowCameraModal(true);
                        }
                    }}
                    type="filled"
                    classes={{
                        root: `
                            bg-white py-4 border border-1 border-black
                            rounded-full mt-0 mb-5
                        `, 
                        title: '!text-black text-center',
                    }}
                />
                <CommonButton
                    title="Images"
                    Component={{
                        View: FileInput,
                        props: {
                            onUpload,
                        },
                    }}
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
                            h-14 w-30 flex-col !mx-2 !flex-row bg-white
                        `,
                        title: '!text-black text-center',
                    }}
                />
            </Container>
            <Container>
                <CommonButton
                    title="Link"
                    icon={({ classes }) => (
                        <CameraIcon
                            fill="black"
                            classes={`${classes} !w-4 !h-4`}
                        />
                    )}
                    disabled={!CameraExists}
                    onClick={async () => {
                        const allow = await requestPermisstion();
                        
                        if (allow) {
                            moveToCamera();
                        }
                        else {
                            setShowCameraModal(true);
                        }
                    }}
                    type="filled"
                    classes={{
                        root: `
                            bg-white py-4 border border-1 border-black
                            rounded-full mt-0 mb-5 px-7
                        `, 
                        title: '!text-black text-center',
                    }}
                />
                <CommonButton
                    title="Files"
                    Component={{
                        View: FileInput,
                        props: {
                            onUpload,
                        },
                    }}
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
                            h-14 w-30 flex-col !mx-2 !flex-row bg-white px-7
                        `,
                        title: '!text-black text-center',
                    }}
                />
            </Container>
            {showCameraModal && (
                <CameraAccessDeniedModal 
                    onClose={() => setShowCameraModal(false)} 
                />
            )}
        </Container>
    );
}

export default GetFilesMenu;