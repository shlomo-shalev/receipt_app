// Tools
import React, { useRef, useState } from "react";

// Complete components
// -- app
import FilesList from "app/View/Components/Complete/App/Lists/FilesList/FilesList";
import TextInput from 'app/View/Components/Complete/MaterialDesign/Form/Input/TextInput';
import ReceiptBorder from "app/View/Components/Complete/App/Widgets/ReceiptBorder/ReceiptBorder";
import TextAreaInput from "app/View/Components/Complete/MaterialDesign/Form/Input/TextAreaInput";

// Local components
import ScanMenu from "app/View/Components/Pages/ScanPage/Components/ScanMenu/ScanMenu";

// Base components
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";

// Bootstrap components
import Fixed from "app/View/Bootstrap/Fixed/__DOM_DRIVER__";

// Apis
import Form from "app/View/Hooks/Form/Form";

// Repositories
import ReceiptReoistory from "app/Repositories/Receipts/ReceiptReoistory";

// Hooks
import useRoute from 'app/View/Hooks/Navigation/useRoute';

function DataStep({ steper: { onMove, dataRef } }) {
    const [photos] = useState(dataRef.current.photos);
    const route = useRoute();

    const inputsRef = useRef({
        companyName: null,
        price: null,
        note: null,
    });

    return (
        <Container
            classes="h-full flex flex-col"
        >
            <ReceiptBorder classes="relative px-2">
                <Container classes="mt-5 overflow-y-scroll">
                    <TextInput 
                        title="Company name"
                        classes="mx-2"
                        inputRef={ref => inputsRef.current.companyName = ref}
                    />
                    <TextInput 
                        title="Price"
                        classes="mx-2"
                        inputRef={ref => inputsRef.current.price = ref}
                    />
                    <TextAreaInput 
                        title="Note"
                        classes="mx-2"
                        inputRef={ref => inputsRef.current.note = ref}
                    />
                    <Container classes="my-8 overflow-x-scroll scrollbar-none">
                        <Container classes="h-72 overflow-y-hidden flex flex-row pb-2">
                            <FilesList 
                                files={photos}
                                // heightInObject
                                classes={{
                                    imageRoot: 'mx-2',
                                    image: '',
                                }}
                                width={180}
                                glonalHeight={300}
                            />
                        </Container>
                    </Container>
                </Container>
            </ReceiptBorder>
            <ScanMenu
                stepName="save"
                onClose={() => onMove('files')}
                onSave={async () => {
                    const data = {
                        photos,
                        companyName: Form.elementToValue(inputsRef.current.companyName),
                        price: parseInt(Form.elementToValue(inputsRef.current.price) || 0),
                        note: Form.elementToValue(inputsRef.current.note),
                    };
                    
                    const saveData = await ReceiptReoistory.save(data);
                    
                    if (saveData) route.move('/list');
                }}
            />
        </Container>
    );
}

const fixeClasses = 'top-0 left-0 right-0 bottom-0';

export default Fixed(DataStep, fixeClasses);