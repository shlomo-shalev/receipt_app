// Tools
import React, { useRef } from "react";

// Base components
import Text from "app/View/Components/Bases/Components/Text/__DOM_DRIVER__";
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

// Coomplete components
// -- app
import ReciptBorder from "app/View/Components/Complete/App/Widgets/ReciptBorder/ReciptBorder";
import LastDeviceFilesList from "app/View/Components/Complete/App/Widgets/LastDeviceFilesList/LastDeviceFilesList";
// -- icons
import ScanIcon from "app/View/Components/Complete/MaterialDesign/Icons/Scan";

// Local components
import GetFileMenu from "./Components/GetFileMenu/GetFileMenu";

// Hooks
import useElementDimensions from "app/View/Hooks/Dimensions/useElementDimensions";

function FilesStep({ steper: { onMove } }) {

    const reciptBorderRef = useRef(null);

    const elementDimensions = useElementDimensions(reciptBorderRef);    

    function onUpload(photos) {
        if (photos.length > 0) {
            onMove('photos', {
                photos,
                elementDimensions,
            });
        }
    }

    function onChoose(photo) {
        onMove('photos', {
            photos: [photo],
            elementDimensions,
        });
    }

    return (
        <ReciptBorder 
            classes="justify-center"
            elementRef={reciptBorderRef}
        >
            <ScanIcon
                fill="black"
                classes="!w-20 !h-20 mx-auto"
            />
            <Text
                classes="!text-black font-bold text-base text-center !mb-6"
            >
                Scan a receipt or invoice
            </Text>
            <Container 
                classes="flex flex-row mx-auto overflow-x-auto scrollbar-none"
            >
                <GetFileMenu 
                    onUpload={onUpload}
                    moveToCamera={() => onMove('camera', {
                        elementDimensions,
                    })}
                />
                <LastDeviceFilesList 
                    onChoose={onChoose}
                />
            </Container>
        </ReciptBorder>
    );
}

export default FilesStep;