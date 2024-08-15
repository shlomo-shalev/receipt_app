// Tools
import React, { useEffect, useState } from "react";

// Base components
import Text from "app/View/Components/Bases/Components/Text/__DOM_DRIVER__";
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

// Hooks
import useRoute from 'app/View/Hooks/Navigation/useRoute';
import useListenRoutePath from "app/View/Hooks/Navigation/useListenRoutePath";

function TransactionPage() {    
    // const route = useRoute();
    const { start, ...routeData } = useListenRoutePath();
    const pathData = (routeData?.params || {path: {}}).path as {id: string};

    const transactionId: number = parseInt(pathData.id || '0');
    
    console.log('data', {start, transactionId});

    return (
        <Container classes="overflow-y-auto pt-5 h-full">
            <Text>
                Transaction: {transactionId} 
            </Text>
        </Container>
    );
}

export default TransactionPage;