// Repositories
import EncryptionRepository from "app/Repositories/EncryptionRepository";
import ReceiptReoistory from "app/Repositories/Receipts/ReceiptReoistory";

// Interfaces
import { file } from "app/View/Bootstrap/Storage/File";

// Api's
import Choose from "app/View/Hooks/Choose/Choose";

//  Local data
import { backupKey } from "./ExportDataService";

class ImportDataService {

    async execute (file: file) : Promise<object>
    {                
        const text = await Choose.dataUrlToBase64(file.dataUrl);
        
        const encryptedData = await EncryptionRepository.decrypt({
            key: backupKey,
            text,
        });

        const data = JSON.parse(encryptedData);        

        const files = data.files.reduce((files, file) => {
            files[file.url] = file;
            return files;
        }, {});

        const receipts = data.receipts.reduce((receipts, receipt) => {
            receipts[receipt.id] = receipt;
            return receipts;
        }, {});

        const receiptsImages = data.receiptsImages.reduce((receiptsImages, receiptImages) => {
            receiptsImages[receiptImages.receipt_id] = receiptsImages[receiptImages.receipt_id] || [];
            receiptsImages[receiptImages.receipt_id].push(receiptImages);
            return receiptsImages;
        }, {});        

        for (const index in data.transactions) {
            if (Object.prototype.hasOwnProperty.call(data.transactions, index)) {
                const transaction = data.transactions[index];

                let receiptsIds = transaction.receipts_ids;
                receiptsIds = typeof receiptsIds === 'string' 
                    ? JSON.parse(transaction.receipts_ids) 
                    : receiptsIds;
                
                const receiptId = receiptsIds[0];
                const receipt = receipts[receiptId] || {};

                if (receipt.id) {
                    let receiptImages = receiptsImages[receiptId] || {};

                    if (receiptImages[0].id) {
                        receiptImages = receiptImages.map(receiptImage => {
                            receiptImage.file = files[receiptImage.url];
                            return receiptImage;
                        });
                        const data = {
                            photos: receiptImages.map(receiptImage => receiptImage.file),
                            companyName: receipt.company_name,
                            price: parseInt(receipt.price || 0),
                            note: receipt.note || '',
                        };
                        
                        await ReceiptReoistory.save(data);
                    }
                }
            }
        }

        return {};
    }
}

export default ImportDataService;