// Tools
import React, { useEffect } from "react";

// Base components
import Skeleton from "app/View/Components/Bases/Components/Skeleton/__DOM_DRIVER__";
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

// Repositories
import TransactionsListsRepository from "app/Repositories/Transactions/Data/TransactionsListsRepository";

function LoadStep({ steper: { onMove } }) {

    useEffect(() => {
        (async () => {
            const transactions = await TransactionsListsRepository.list({});

            if (transactions.length > 0) {
                onMove('transactions', {
                    transactions,
                });
            }
            else {
                onMove('empty');
            }
        })()
    }, []);

    return (
        <Container classes="overflow-y-auto pt-5 h-full pb-2 px-5">
            {[...(new Array(6))].map((v, i) => (
                <Container 
                    key={i}
                >
                    <Skeleton 
                            width={50}
                            height={50}
                        />
                </Container>
            ))}
        </Container>
    );
}

export default LoadStep;