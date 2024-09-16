// Tools
import React from "react";

// Local components
// -- buttons
import ScanNextButton from "../Buttons/ScanNextButton";
import ScanCloseButton from "../Buttons/ScanCloseButton";

function BaseMenuStep({ onClose, onNext, disabledes }) {
    return (
        <>
            <ScanCloseButton 
                onClick={onClose}
            />
            <ScanNextButton 
                disabled={disabledes.next}
                onClick={onNext}
            />
        </>
    );
}

export default BaseMenuStep;