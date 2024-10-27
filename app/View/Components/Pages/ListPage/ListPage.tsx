// Tools
import React, { useEffect, useState } from "react";

// Base components
import Title from "app/View/Components/Bases/Components/Title/__DOM_DRIVER__";
import Image from "app/View/Components/Bases/Components/Image/__DOM_DRIVER__";
import Skeleton from "app/View/Components/Bases/Components/Skeleton/__DOM_DRIVER__";
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

// Complete components
// --- Icons
import ActionIcon from "app/View/Components/Complete/MaterialDesign/Icons/Action";

// Repositories
import TransactionsListsRepository from "app/Repositories/Transactions/Data/TransactionsListsRepository";

// Apis
import Date from "app/View/Hooks/Date/Date";

// Hooks
import useRoute from "app/View/Hooks/Navigation/useRoute";

function ListPage() {
    const [transactions, setTransactions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const route = useRoute();

    useEffect(() => {
        (async () => {
            const transactions = await TransactionsListsRepository.list({});
            setTransactions(transactions as [] || []);
            setIsLoading(false);
        })()
    }, []);
    
    const itemsJSX = transactions.map((item, i) => {
        const date = new Date(item.created_at);
        const photo = item.receiptImages[0].file;        

        return (
            <Container key={i}>
                <Container 
                    classes="
                        bg-gray-200 p-4 py-2 flex items-center my-3
                        justify-between flex-row pl-2 pr-0 rounded
                    "
                    onClick={() => {
                        route.move(`/transaction/${item.id}`);
                    }}
                >
                    <Image 
                        src={photo.url}
                        height="100%"
                    />
                    <Container 
                        classes="
                            pl-3 flex flex-col font-left flex-1
                            overflow-hidden 
                        " 
                    >
                        <Title
                            classes="!text-sm !font-bold"
                        >
                            ${item.price}
                        </Title>
                        <Title classes="text-xs">
                            {date.toSimpleFormat({ time: false })} {date.toTime({})}
                        </Title>
                        <Title 
                            classes="!text-xs max-h-8"
                        >
                            {item.company_name}
                        </Title>
                    </Container>
                    <Container 
                        classes="!p-3 !py-4"
                        onClick={() => {
                            
                        }}
                    >
                        <ActionIcon classes="h-4" />
                    </Container>
                </Container>
            </Container>
        );
    });

    return (
        <Container classes="overflow-y-auto pt-5 h-full pb-2 px-5">
            {/* <Category 
                title="Global" 
                items={transactions}
            /> */}
            {itemsJSX}
            {isLoading && (
                [...(new Array(6))].map((v, i) => (
                    <Container 
                        height={67}
                        classes="my-3 flex rounded overflow-hidden"
                        key={i}
                    >
                        <Skeleton 
                                width={'100%'}
                                height={67}
                            />
                    </Container>
                ))
            )}
        </Container>
    );
}

export default ListPage;