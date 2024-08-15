// Tools
import React, { useEffect, useState } from "react";

// Base components
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

// Complete components
// App widgets
import Category from "app/View/Components/Complete/App/Widgets/Category/Category";

// Repositories
import TransactionsListsRepository from "app/Repositories/Transactions/Data/TransactionsListsRepository";
import useRoute from "app/View/Hooks/Navigation/useRoute";

function ListPage() {
    const [transactions, setTransactions] = useState([]);
    const route = useRoute();

    useEffect(() => {
        route.move('/transaction/123');
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
        </Container>
    );
}

export default ListPage;