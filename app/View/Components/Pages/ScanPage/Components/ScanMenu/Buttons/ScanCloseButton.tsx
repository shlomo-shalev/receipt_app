// Tools
import React from "react";

// Complete components
// -- Material design
import IconButton from "app/View/Components/Complete/MaterialDesign/IconButton/IconButton";
// --- icons
import CloseIcon from "app/View/Components/Complete/MaterialDesign/Icons/Close";

function ScanCloseButton({ onClick }) {
    return (
        <IconButton
            classes={{
                root: `
                    !rounded-2xl bg-gray-200 !p-4
                    border border-gray-600 !mx-0
                `,
            }}
            icon={({ classes }) => (
                <CloseIcon
                    classes={`!w-4 !h-5 ${classes}`}
                    fill="black"
                />
            )}
            onClick={onClick}
        />
    );
}

export default ScanCloseButton;