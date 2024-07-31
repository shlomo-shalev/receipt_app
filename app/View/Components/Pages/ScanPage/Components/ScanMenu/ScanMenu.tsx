// Tools
import React, { useEffect, useState } from "react";

// Base components
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

// Complete components
// -- Material design
import IconButton from "app/View/Components/Complete/MaterialDesign/IconButton/IconButton";
import CommonButton from "app/View/Components/Complete/MaterialDesign/CommonButton/CommonButton";
// --- icons
import CloseIcon from "app/View/Components/Complete/MaterialDesign/Icons/Close";
import TakeAPicCameraIcon from "app/View/Components/Complete/MaterialDesign/Icons/TakeAPicCamera";
import ContinueIcon from "app/View/Components/Complete/MaterialDesign/Icons/Continue";

function ScanMenu({ 
    onClose, onTakePic = null, onNext = null,
    disabledes = {takePic: false, next: false} as {takePic?: Boolean, next?: Boolean} 
}) {
    return (
        <Container 
            classes={`
                fixed bottom-0 left-0 right-0 mt-auto
                flex flex-row py-5 bg-gray-400
            `}
        >
            <IconButton
                // title="CLOSE"
                // type="filled"
                classes={{
                    root: `
                        !rounded-2xl bg-gray-200 !p-4
                        border border-gray-600
                    `,
                    // title: '!text-black'
                }}
                icon={({ classes }) => (
                    <CloseIcon
                        classes={`!w-4 !h-5 ${classes}`}
                        fill="black"
                    />
                )}
                onClick={onClose}
            />
            <IconButton
                disabled={!!disabledes.takePic}
                classes={{
                    root: `
                        !rounded-full !p-5 bg-white border border-gray-600
                    `,
                }}
                icon={({ classes }) => (
                    <TakeAPicCameraIcon //CameraIcon
                        classes={`opacity-75 !w-10 !h-10 mx--6 ${classes}`}
                    />
                )}
                onClick={onTakePic}
            />
            <IconButton //CommonButton
                // title="NEXT"
                // type="filled"
                disabled={!!disabledes.next}
                classes={{
                    root: `
                        !rounded-2xl !bg-gray-700 !p-3.5 border border-gray-600
                        flex-row-reverse
                    `,
                    // title: '!text-white p-0 pr-2 pl-0.5'
                }}
                icon={({ classes }) => (
                    <ContinueIcon
                        classes={`!w-6 !h-6 mx--1 ${classes}`}
                        fill="white"
                    />
                )}
                onClick={onNext}
            />
            
        </Container>
    );
}

export default ScanMenu;