// Tools
import React, { useRef } from "react";

// Base components
import Text from "app/View/Components/Bases/Components/Text/__DOM_DRIVER__";
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

// Coomplete components
// -- app
import FilesList from "app/View/Components/Complete/App/Widgets/FilesList/FilesList";
import ReciptBorder from "app/View/Components/Complete/App/Widgets/ReciptBorder/ReciptBorder";
// -- icons
import ScanIcon from "app/View/Components/Complete/MaterialDesign/Icons/Scan";
import GetFilesMenu from "./Components/GetFilesMenu/GetFilesMenu";

// Hooks
import useElementDimensions from "app/View/Hooks/Dimensions/useElementDimensions";

function FilesStep({ steper: { onMove } }) {

    const reciptBorderRef = useRef(null);

    const elementDimensions = useElementDimensions(reciptBorderRef);

    function onUpload(data) {
        console.log('data', data);
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
                <GetFilesMenu 
                    onUpload={onUpload}
                    moveToCamera={() => onMove('camera', {
                        elementDimensions,
                    })}
                />
                <FilesList />
            </Container>
        </ReciptBorder>
    );
}

export default FilesStep;