// Tools
import React from "react";

// Complete components
// -- Material design
// --- buttons
import CommonButton from "app/View/Components/Complete/MaterialDesign/CommonButton/CommonButton";
// --- icons
import SaveIcon from "app/View/Components/Complete/MaterialDesign/Icons/Save";

function ScanSaveButton({ onClick }) {
    return (
        <CommonButton
            title="Save"
            type="outlined"
            classes={{
                root: `
                    !rounded-2xl bg-gray-200 !p-4
                    border border-gray-600 !m-0
                `,
            }}
            icon={({ classes }) => (
                <SaveIcon
                    classes={`!w-4 !h-5 ${classes}`}
                    fill="black"
                />
            )}
            onClick={onClick}
        />
    );
}

export default ScanSaveButton;