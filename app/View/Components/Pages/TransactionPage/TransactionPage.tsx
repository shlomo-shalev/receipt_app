// Tools
import uuid from "uuid-random";
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
import TransactionRepository, { Transaction } from "app/Repositories/Transactions/Transaction/TransactionRepository";
import FilesList from "../../Complete/App/Lists/FilesList/FilesList";

// Api
import Network, { prepareFile } from "app/View/Hooks/Network";
import { createLocalurl, dataURItoBlob } from "app/Models/Blob/Blob";

function useOcrData({ transactionId, transaction }: {transactionId: number, transaction: Transaction}) {
    const [ocrData, setOcrData] = useState([]);

    useEffect(() => {
        (async () => {
            if (transactionId > 0) {
                const newReceiptsImages = [];

                for (const index in transaction.receiptsImages) {
                    if (Object.prototype.hasOwnProperty.call(transaction.receiptsImages, index)) {
                        const receiptsImage = transaction.receiptsImages[index];
                        
                        const image = await prepareFile({ 
                            url: receiptsImage.file.url,
                        });
                 
                        const { data } = await Network.post({
                            url: 'http://localhost:3034/image/extraction/text',
                            data: {
                                image,
                            },
                        });

                        const now = new Date();
                        const id = uuid();                        

                        newReceiptsImages[index] = {
                            ...data.fields, 
                            file: {
                                id,
                                name: id,
                                type: data.image.type,
                                dataUrl: data.image.dataURL,
                                url: createLocalurl(dataURItoBlob(data.image.dataURL)),
                                lastModified: now.getTime(),
                                lastModifiedDate: now,
                            },
                        };

                        const popupContent = `
                            <!DOCTYPE html>
                            <html>
                            <head>
                            <title>View File</title>
                            </head>
                            <body>
                            <img src="${newReceiptsImages[index].file.url}" class="" style="width: 100%; height: 100%;">
                            </body>
                            </html>
                        `;

                        const popupFeatures = `width=800,height=1000000,scrollbars=yes,resizable=yes`;
                        const popup = window.open('', transaction.receiptsImages[index].id, popupFeatures);
                        popup.document.open();
                        popup.document.write(popupContent);
                        popup.document.close();
                    }
                }

                setOcrData(newReceiptsImages);
            }
        })()
    }, [transactionId]);

    return ocrData;
}

function TransactionPage() {    
    const route = useRoute();
    const { start, ...routeData } = useListenRoutePath();
    const pathData = (routeData?.params || {path: {}}).path as {id: string};

    const [transaction, setTransaction] = useState({} as Transaction | null);

    const transactionId: number = parseInt(pathData.id || '0');

    const ocrData = useOcrData({
        transactionId: transaction.id,
        transaction,
    });
    

    useEffect(() => {
        (async () => {
            if (transactionId > 0) {
                const transaction = await TransactionRepository.find(transactionId);
                if (transaction?.id > 0) {
                    setTransaction(transaction || null);
                }
                else { 
                    route.move('/');
                }
            }
        })()
    }, [transactionId]);

    const photos = (transaction.receiptsImages || []).map((item, i) => ocrData[i]?.file || item.file);    

    const price = ocrData[0]?.price || transaction.price || 0;
    const companyName = ocrData[0]?.companyName || transaction.company_name || '';

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