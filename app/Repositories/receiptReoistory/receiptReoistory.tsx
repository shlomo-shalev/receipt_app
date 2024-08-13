import { save as rowSave } from "app/View/Bootstrap/Storage/Big/drivers/__DOM_DRIVER__";
import { save as fileSave } from "app/View/Bootstrap/Storage/File/drivers/__DOM_DRIVER__";

class receiptReoistory {    
    static async save({ companyName, price, note, photos }) : Promise<object|false>
    {
        try {
            const now = new Date().toISOString();

            const receiptId = await rowSave('receipts', {
                company_name: companyName,
                price, note,
                created_at: now,
                updated_at: now,
            });

            for (const photo of photos) {
                const type = (photo.type.match(/[^/]+$/) || '')[0];
                const url = await fileSave(`${photo.id}.${type}`, photo.dataUrl, '/receipts');
                await rowSave('receipts_images', {
                    receipt_id: receiptId, url,
                    created_at: now,
                });
            }
            
            const transactionId = await rowSave('transactions', {
                company_name: companyName, price,
                doc_created_at: now,
                created_at: now,
                updated_at: now,
            });

            const transactionsReceiptId = await rowSave('transactions_receipts', {
                transaction_id: transactionId,
                receipt_id: receiptId,
                created_at: now,
            });

            return {
                receiptId,
                transactionId,
                transactionsReceiptId,
            }
        }
        catch (ex) {
            return false;
        }
    }
}

export default receiptReoistory;