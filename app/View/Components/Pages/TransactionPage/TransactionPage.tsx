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
// --- icons
import CloseIcon from "app/View/Components/Complete/MaterialDesign/Icons/Close";
import Fixed from "app/View/Bootstrap/Fixed/__DOM_DRIVER__";

// Repositories
import TransactionRepository from "app/Repositories/Transactions/Transaction/TransactionRepository";
import FilesList from "../../Complete/App/Lists/FilesList/FilesList";

function TransactionPage() {    
    const route = useRoute();
    const { start, ...routeData } = useListenRoutePath();
    const pathData = (routeData?.params || {path: {}}).path as {id: string};

    const [transaction, setTransaction] = useState({});

    const transactionId: number = parseInt(pathData.id || '0');
    
    useEffect(() => {
        (async () => {
            if (transactionId > 0) {
                const transaction = await TransactionRepository.find(transactionId);
                if (transaction?.id > 0) {
                    setTransaction(transaction);
                }
                else { 
                    route.move('/');
                }
                
            }
        })()
    }, [transactionId]);

    const photos = (transaction.receiptsImages || []).map(item => item.file);

    return (
        <Container
            classes="p-3 h-full bg-gray-400 z-10"
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
            <Container classes="p-2 flex flex-row flex-wrap">
                <Container classes="p-2 m-2 mt-0 px-4 bg-white flex flex-row">
                    <Text classes="font-bold !text-sm !m-auto">
                        Transaction id: 
                    </Text>
                    <Text classes="pl-2">
                        {transaction.id || transactionId}
                    </Text>
                </Container>
                <Container classes="p-2 m-2 mt-0 px-4 bg-white flex flex-row">
                    <Text classes="font-bold !text-sm !m-auto">
                        Price: 
                    </Text>
                    <Text classes="pl-2">
                        {transaction.price || 0}$
                    </Text>
                </Container>
                <Container classes="p-2 m-2 mt-0 px-4 bg-white flex flex-row">
                    <Text classes="font-bold !text-sm !m-auto">
                        Company name: 
                    </Text>
                    <Text classes="pl-2">
                        {transaction.company_name || ''}
                    </Text>
                </Container>
            </Container>
            <Container classes="mx-2 my-8 overflow-x-scroll scrollbar-none">
                <Container classes="h-80 overflow-y-hidden flex flex-row pb-2">
                    <FilesList 
                        files={photos}
                        heightInObject
                        classes={{
                            imageRoot: 'mx-2',
                            image: '',
                        }}
                        width={200}
                    />
                </Container>
            </Container>
        </Container>
    );
}

const fixeClasses = 'top-0 left-0 right-0 bottom-0';

export default Fixed(TransactionPage, fixeClasses);