// Api
import { find, getData } from "app/View/Bootstrap/Storage/Big";
import { file, get as getFile } from "app/View/Bootstrap/Storage/File";
export interface Transaction {
    id: number, 
    price: number, 
    company_name: String, 
    receiptsImages: Array<receiptsImage>
}

export interface receiptsImage {
    id: number;
    receipt_id: number;
    created_at: Date;
    url: string;
    file: file;
}

class TransactionRepository {    
    static async find(transactionId) : Promise<Transaction>
    {
        let transactionData = await find({ // TODO - Transaction page dependence
            table: 'transactions', 
            id: transactionId,
        });
        
        if (transactionData?.id) {
            const receiptsImages = await getData({
                table: 'receipts_images', 
                size: 5, // TODO - Replace to 20 after build filter for react native driver
                filter: {
                    receipt_id: transactionData.receipts_ids[0], // TODO - Transaction page dependence
                },
            });
            
            for (const receiptImage of receiptsImages as receiptsImage[]) {
                receiptImage.file = await getFile(receiptImage.url);                
            }
            
            transactionData.receiptsImages = receiptsImages;
        }
        

        return transactionData;
    }
}

export default TransactionRepository;