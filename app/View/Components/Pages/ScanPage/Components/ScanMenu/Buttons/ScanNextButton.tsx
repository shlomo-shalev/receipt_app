// Tools
import React from "react";

// Complete components
// -- Material design
import IconButton from "app/View/Components/Complete/MaterialDesign/IconButton/IconButton";
// --- icons
import ContinueIcon from "app/View/Components/Complete/MaterialDesign/Icons/Continue";

function ScanNextButton({ disabled, onClick }) {
    return (
        <IconButton
            disabled={disabled}
            classes={{
                root: `
                    !rounded-2xl !bg-gray-700 !p-3.5 border border-gray-600
                    flex-row-reverse !mx-0
                `,
            }}
            icon={({ classes }) => (
                <ContinueIcon
                    classes={`!w-6 !h-6 ${classes}`}
                    fill="white"
                />
            )}
            onClick={onClick}
        />
    );
}

export default ScanNextButton;