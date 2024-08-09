// Tools
import React from "react";

// Local components
// -- buttons
import ScanNextButton from "../Buttons/ScanNextButton";
import ScanCloseButton from "../Buttons/ScanCloseButton";
import ScanTakePictureButton from "../Buttons/ScanTakePictureButton";

function ChooseFilesMenuStep({  onClose, onTakePic, onNext, disabledes }) {
    return (
        <>
            <ScanCloseButton 
                onClick={onClose}
            />
            <ScanTakePictureButton 
                disabled={!!disabledes.takePic}
                onClick={onTakePic}
            />
            <ScanNextButton 
                disabled={!!disabledes.next}
                onClick={onNext}
            />
        </>
    );
}

export default ChooseFilesMenuStep;