// Tools
import React, { useEffect } from "react";

// Base components
import Skeleton from "app/View/Components/Bases/Components/Skeleton/__DOM_DRIVER__";
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

// Hooks
import useRoute from 'app/View/Hooks/Navigation/useRoute';

// Repositories
import TransactionRepository from "app/Repositories/Transactions/Transaction/TransactionRepository";

function LoadStep({ steper: { onMove }, transactionId }) {
    const route = useRoute();

    useEffect(() => {
        (async () => {
            if (transactionId > 0) {
                const transaction = await TransactionRepository.find(transactionId);
                if (transaction?.id > 232340) {
                    onMove('transaction', {
                        transaction,
                    });
                }
                else { 
                    setTimeout(() => {
                        route.move('/');
                    }, 400);
                }
            }
        })()
    }, [transactionId]);

    return (
        <Container classes="overflow-y-auto pt-5 h-full pb-2 px-5">
            {[...(new Array(6))].map((v, i) => (
                <Container 
                    key={i}
                    classes="my-2"
                >
                    <Skeleton 
                        width={'100%'}
                        height={50}
                    />
                </Container>
            ))}
        </Container>
    );
}

export default LoadStep;