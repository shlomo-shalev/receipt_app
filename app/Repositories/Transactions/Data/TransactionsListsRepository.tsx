// Repositories
import { Transaction } from "app/Repositories/Transactions/Transaction/TransactionRepository";

// Api
import { file, get as fileGet } from "app/View/Bootstrap/Storage/File";
import { getData, getAll } from "app/View/Bootstrap/Storage/Big/drivers/__DOM_DRIVER__";

class TransactionsListsRepository {    
    static async list({}) : Promise<Array<Transaction>>
    {
        let data = null;
        try {
            data = await getData({
                table: 'transactions', 
                page: 1,
                size: 7, 
                order: 'desc',
            });

            for (const index in data) {
                const receiptsIds = JSON.parse(data[index].receipts_ids);
                const receiptsId = receiptsIds[0];
                
                const receiptImageResult = await getData({
                    table: 'receipts_images', 
                    size: 1, 
                    filter: {
                        receipt_id: receiptsId,
                    },
                });
                const receiptImage = receiptImageResult[0];

                receiptImage.file = await fileGet(receiptImage.url);
                
                data[index].receiptImages = [receiptImage];
            }
        }
        catch(ex) {            
            console.error(`${ex}`);
        }

        return data;
    }

    static async getAll({}) : Promise<Object>
    {
        const data = await getAll({
            table: 'transactions',
        });

        return data;
    }
}

export default TransactionsListsRepository;