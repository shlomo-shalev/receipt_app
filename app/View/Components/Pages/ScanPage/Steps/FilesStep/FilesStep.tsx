// Tools
import React, { useRef } from "react";

// Base components
import Text from "app/View/Components/Bases/Components/Text/__DOM_DRIVER__";
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

// Complete components
// -- app
import ReceiptBorder from "app/View/Components/Complete/App/Widgets/ReceiptBorder/ReceiptBorder";
import LastDeviceFilesList from "app/View/Components/Complete/App/Widgets/LastDeviceFilesList/LastDeviceFilesList";
// -- icons
import ScanIcon from "app/View/Components/Complete/MaterialDesign/Icons/Scan";

// Local components
import GetFileMenu from "./Components/GetFileMenu/GetFileMenu";

// Hooks
import useElementDimensions from "app/View/Hooks/Dimensions/useElementDimensions";
import File from "app/View/Hooks/File/File";

function FilesStep({ steper: { onMove } }) {

    const ReceiptBorderRef = useRef(null);

    const elementDimensions = useElementDimensions(ReceiptBorderRef);

    function onUploadImages(photos) {
        if (photos.length > 0) {            
            onMove('photos', {
                photos,
                elementDimensions,
            });
        }
    }

    async function onUploadFiles(files) {
        if (files.length > 0) {
            const file = files[0];
            const photos = await File.convertPdfPagesToPhotos(file);
            
            onMove('data', {
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
        <ReceiptBorder 
            classes="justify-center px-2"
            elementRef={ReceiptBorderRef}
        >
            {/* <ScanIcon
                fill="white"
                classes="!w-20 !h-20 mx-auto"
            /> */}
            <Text
                classes="!text-white font-bold text-base text-center !mb-6"
            >
                Upload your receipt or invoice
            </Text>
            <Container classes="mb-5">
                <GetFileMenu 
                    onUploadImages={onUploadImages}
                    onUploadFiles={onUploadFiles}
                    moveToCamera={() => {
                        onMove('camera', {
                            elementDimensions,
                        })
                    }}
                    moveToGettingLink={() => {
                        onMove('link', {
                            elementDimensions,
                        })
                    }}
                />
            </Container>
            <LastDeviceFilesList 
                onChoose={onChoose}
                listClasses="mx-3"
            />
        </ReceiptBorder>
    );
}

export default FilesStep;