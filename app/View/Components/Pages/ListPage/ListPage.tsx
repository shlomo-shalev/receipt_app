// Tools
import React, { useEffect, useState } from "react";

// Base components
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

// Complete components
// -- App widgets
import Category from "app/View/Components/Complete/App/Widgets/Category/Category";
// -- Material design
// --- app 
import Divider from "app/View/Components/Complete/MaterialDesign/Divider/Divider";

// Repositories
import TransactionsListsRepository from "app/Repositories/Transactions/Data/TransactionsListsRepository";

function ListPage() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        (async () => {
            const transactions = await TransactionsListsRepository.list({});
            setTransactions(transactions as [] || []);
        })()
    }, []);
    
    return (
        <Container classes="overflow-y-auto pt-5 h-full">
            <Category 
                title="Global" 
                items={transactions}
            />
            <Divider classes="my-2" />
        </Container>
    );
}

export default ListPage;