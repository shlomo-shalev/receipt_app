// Tools
import React, { useEffect, useState } from "react";

// Base components
import Text from "app/View/Components/Bases/Components/Text/__DOM_DRIVER__";
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

// Hooks
import useRoute from 'app/View/Hooks/Navigation/useRoute';
import useListenRoutePath from "app/View/Hooks/Navigation/useListenRoutePath";

// Complete components
// -- material design
// --- app
import IconButton from "app/View/Components/Complete/MaterialDesign/IconButton/IconButton";
// icons
import CloseIcon from "app/View/Components/Complete/MaterialDesign/Icons/Close";

function TransactionPage() {    
    const route = useRoute();
    const { start, ...routeData } = useListenRoutePath();
    const pathData = (routeData?.params || {path: {}}).path as {id: string};

    const transactionId: number = parseInt(pathData.id || '0');
    
    console.log('data', {start, transactionId});

    return (
        <Container 
            classes="
                fixed top-0 left-0 right-0 bottom-0 p-3 h-full
                bg-gray-400
            "
        >
            <Container classes="mb-4">
                <IconButton
                    classes={{
                        root: '!m-0 !p-0 !py-2 bg-gray-500 w-10',
                    }}
                    onClick={() => {
                        route.back();
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
            <Container classes="p-2 flex flex-row flex-wrap">
                <Container classes="p-2 m-2 mt-0 px-4 bg-white inline-block">
                    <Text classes="font-bold !text-sm inline-block">
                        Transaction id: 
                    </Text>
                    <Text classes="pl-2 inline-block">
                        {transactionId}
                    </Text>
                </Container>
                <Container classes="p-2 m-2 mt-0 px-4 bg-white inline-block">
                    <Text classes="font-bold !text-sm inline-block">
                        Price: 
                    </Text>
                    <Text classes="pl-2 inline-block">
                        120$
                    </Text>
                </Container>
                <Container classes="p-2 m-2 mt-0 px-4 bg-white inline-block">
                    <Text classes="font-bold !text-sm inline-block">
                        Company name: 
                    </Text>
                    <Text classes="pl-2 inline-block">
                        Bla bla la bu
                    </Text>
                </Container>
            </Container>
        </Container>
    );
}

export default TransactionPage;