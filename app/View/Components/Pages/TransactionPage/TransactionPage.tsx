// Tools
import React, { useEffect, useState } from "react";

// Base components
import Fixed from "app/View/Bootstrap/Fixed/__DOM_DRIVER__";
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

// Hooks
import useRoute from 'app/View/Hooks/Navigation/useRoute';
import useListenRoutePath from "app/View/Hooks/Navigation/useListenRoutePath";

// Complete components
// --- app
import Step from "app/View/Components/Complete/Steper/Step";
import Steper from "app/View/Components/Complete/Steper/Steper";
import IconButton from "app/View/Components/Complete/MaterialDesign/IconButton/IconButton";
// --- icons
import CloseIcon from "app/View/Components/Complete/MaterialDesign/Icons/Close";

// Local components
import LoadStep from "./Steps/LoadStep";
import ShowTransactionStep from "./Steps/ShowTransactionStep";

function TransactionPage() {
    const route = useRoute();
    const { start, ...routeData } = useListenRoutePath();
    const id = ({id: 0, ...routeData?.params?.path }).id;

    return (
        <Container
            classes="p-3 h-full bg-gray-600 z-10"
        >
            <Container classes="mb-4">
                <IconButton
                    classes={{
                        root: '!m-0 !p-0 !py-2 bg-gray-500 w-10',
                    }}
                    onClick={() => {                        
                        route.back('/list');
                    }}
                    icon={() => {
                        return (
                            <CloseIcon 
                                classes="w-5.5 h-6" 
                                fill="white"
                            />
                        );
                    }}
                />
            </Container>
            <Steper default="load">
                <Step 
                    step="load"
                    component={LoadStep}
                    props={{
                        transactionId: id,
                    }}
                />
                <Step 
                    step="transaction"
                    component={ShowTransactionStep}
                />
            </Steper>
        </Container>
    );
}

const fixeClasses = 'top-0 left-0 right-0 bottom-0';

export default Fixed(TransactionPage, fixeClasses);