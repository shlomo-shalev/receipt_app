// Tools
import React from "react";

// Base components
import Text from "app/View/Components/Bases/Components/Text/__DOM_DRIVER__";
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

// Complete components
// --- app
import FilesList from "app/View/Components/Complete/App/Lists/FilesList/FilesList";

function ShowTransactionStep({ steper: { dataRef } }) {
    const transaction = dataRef.current.transaction;

    const photos = (transaction.receiptsImages || []).map((item, i) => item.file);

    const price = transaction.price || 0;
    const companyName = transaction.company_name || 'Unknown';
    
    return (
        <>
            <Container classes="p-2 flex flex-row flex-wrap">
                <Container classes="p-2 m-2 mt-0 px-4 bg-white flex flex-row">
                    <Text classes="font-bold !text-sm !m-auto">
                        Transaction id: 
                    </Text>
                    <Text classes="pl-2">
                        {transaction.id}
                    </Text>
                </Container>
                <Container classes="p-2 m-2 mt-0 px-4 bg-white flex flex-row">
                    <Text classes="font-bold !text-sm !m-auto">
                        Price: 
                    </Text>
                    <Text classes="pl-2">
                        {price}$
                    </Text>
                </Container>
                <Container classes="p-2 m-2 mt-0 px-4 bg-white flex flex-row">
                    <Text classes="font-bold !text-sm !m-auto">
                        Company name: 
                    </Text>
                    <Text classes="pl-2">
                        {companyName}
                    </Text>
                </Container>
            </Container>
            <Container classes="mx-2 my-8 overflow-x-scroll scrollbar-none">
                <Container classes="h-80 overflow-y-hidden flex flex-row pb-2">
                    <FilesList 
                        files={photos}
                        classes={{
                            imageRoot: 'mx-2 overflow-hidden',
                            image: 'border',
                        }}
                    />
                </Container>
            </Container>
        </>
    );
}

export default ShowTransactionStep;