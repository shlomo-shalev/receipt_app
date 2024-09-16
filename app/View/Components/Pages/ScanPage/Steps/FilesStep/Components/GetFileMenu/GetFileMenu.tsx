// Tools
import React, { useState } from "react";

// Hooks
import useCamera from "app/View/Hooks/Camera/useCamera";

// Base components
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';
import FileInput from "app/View/Components/Bases/Components/FileInput/__DOM_DRIVER__";
import ImageInput from 'app/View/Components/Bases/Components/ImageInput/__DOM_DRIVER__';

// Complete components
// -- app
import CommonButton from "app/View/Components/Complete/MaterialDesign/CommonButton/CommonButton";
// --- modals
import CameraAccessDeniedModal from "app/View/Components/Complete/App/Modals/CameraAccessDeniedModal/CameraAccessDeniedModal";
// -- icons
import FileIcon from "app/View/Components/Complete/MaterialDesign/Icons/File";
import WorldIcon from "app/View/Components/Complete/MaterialDesign/Icons/World";
import CameraIcon from "app/View/Components/Complete/MaterialDesign/Icons/Camera";
import ImagesIcon from "app/View/Components/Complete/MaterialDesign/Icons/Images";

function GetFilesMenu({ onUploadImages, onUploadFiles, moveToCamera, moveToGettingLink }) {
    const [showCameraModal, setShowCameraModal] = useState(false);

    const { requestPermisstion, exists: CameraExists } = useCamera();

    return (
        <Container 
            classes="flex flex-row justify-center"
        >
            <Container classes="!mx-2">
                <CommonButton
                    title="Camera"
                    icon={({ classes }) => (
                        <CameraIcon
                            fill="rgb(55 65 81)"
                            classes={`${classes} !w-5 !h-5`}
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
                        View: ImageInput,
                        props: {
                            onUpload: onUploadImages,
                        },
                    }}
                    icon={({ classes }) => (
                        <ImagesIcon
                            classes={`${classes} w-5 h-5`}
                            fill="rgb(55 65 81)"
                        />
                    )}
                    type="filled"
                    classes={{
                        root: `
                            rounded-full py-4 border border border-black 
                            h-14 w-30 flex-col !flex-row bg-white
                        `,
                        title: '!text-black text-center',
                    }}
                />
            </Container>
            <Container classes="!mx-2">
                <CommonButton
                    title="Link"
                    icon={({ classes }) => (
                        <WorldIcon
                            fill="rgb(55 65 81)"
                            classes={`${classes} !w-5 !h-5`}
                        />
                    )}
                    onClick={async () => {
                        moveToGettingLink();
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
                            onUpload: onUploadFiles,
                            accept: '.pdf',
                        },
                    }}
                    icon={({ classes }) => (
                        <FileIcon
                            classes={`${classes} w-5 h-5`}
                            fill="rgb(55 65 81)"
                        />
                    )}
                    type="filled"
                    classes={{
                        root: `
                            rounded-full py-4 border border border-black 
                            h-14 w-30 flex-col !flex-row bg-white px-7
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