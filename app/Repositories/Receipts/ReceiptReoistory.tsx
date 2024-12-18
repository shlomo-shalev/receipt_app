// Tools
import uuid from "uuid-random";

// Api
import { save as fileSave } from "app/View/Bootstrap/Storage/File/drivers/__DOM_DRIVER__";
import { save as rowSave, update as updateRow } from "app/View/Bootstrap/Storage/Big/drivers/__DOM_DRIVER__";

class receiptReoistory {    
    static async save({ companyName, price, note, photos }) : Promise<object|false>
    {
        try {
            const now = new Date().toISOString();

            let receipt = {
                company_name: companyName,
                price, note,
                transactions_ids: [],
                created_at: now,
                updated_at: now,
            };

            let receiptId = await rowSave('receipts', receipt);

            receiptId = parseInt(`${receiptId}`);

            for (const photo of photos) {
                const type = (photo.type.match(/[^/]+$/) || '')[0];
                
                const id = uuid();

                const base64 = await photo.base64();

                const url = await fileSave(
                    `${id}.${type}`, 
                    base64, 
                    photo.type,
                    '/receipts',
                );
                await rowSave('receipts_images', {
                    receipt_id: receiptId, url,
                    created_at: now,
                });
            }
            
            const transactionId = await rowSave('transactions', {
                company_name: companyName, price, 
                doc_created_at: now,
                receipts_ids: [receiptId],
                created_at: now,
                updated_at: now,
            });

            receipt.transactions_ids = [transactionId];
            // console.log('transactionId', transactionId);

            await updateRow('receipts', receiptId, receipt);

            return {
                receiptId,
                transactionId,
            }
        }
        catch (ex) {
            console.log('ex', ex);
            return false;
        }
    }
}

export default receiptReoistory;