// Api
import { find, getData } from "app/View/Bootstrap/Storage/Big";
import { get as getFile } from "app/View/Bootstrap/Storage/File";


class TransactionRepository {    
    static async find(transactionId) : Promise<Object>
    {
        let transactionData = await find({
            table: 'transactions', 
            id: transactionId,
        });
        
        if (transactionData?.id) {
            const receiptsImages = await getData({
                table: 'receipts_images', 
                size: 5, // TODO - Replace to 20 after build filter for react native driver
                filter: {
                    receipt_id: transactionData.receipts_ids[0],
                },
            });
            
            for (const receiptImage of receiptsImages as []) {
                receiptImage.file = await getFile(receiptImage.url);                
            }
            
            transactionData.receiptsImages = receiptsImages;
        }
        

        return transactionData || {};
    }
}

export default TransactionRepository;