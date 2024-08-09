// Tools
import React from "react";

// Local components
// -- buttons
import ScanSaveButton from "../Buttons/ScanSaveButton";
import ScanCloseButton from "../Buttons/ScanCloseButton";

function SaveDataMenuStep({ onClose, onSave }) {
    return (
        <>
            <ScanCloseButton 
                onClick={onClose}
            />
            <ScanSaveButton 
                onClick={onSave}
            />
        </>
    );
}

export default SaveDataMenuStep;