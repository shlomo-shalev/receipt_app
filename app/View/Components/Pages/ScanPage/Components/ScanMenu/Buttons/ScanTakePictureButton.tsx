// Tools
import React from "react";

// Complete components
// -- Material design
import IconButton from "app/View/Components/Complete/MaterialDesign/IconButton/IconButton";
// --- icons
import TakeAPicCameraIcon from "app/View/Components/Complete/MaterialDesign/Icons/TakeAPicCamera";

function ScanTakePictureButton({ disabled, onClick }) {
    return (
        <IconButton
            disabled={disabled}
            classes={{
                root: `
                    !rounded-full !p-5 bg-white border border-gray-600 !mx-0
                `,
            }}
            icon={({ classes }) => (
                <TakeAPicCameraIcon
                    classes={`opacity-75 !w-10 !h-10 mx--6 ${classes}`}
                />
            )}
            onClick={onClick}
        />
    );
}

export default ScanTakePictureButton;