// Repositories
import EncryptionRepository from "app/Repositories/EncryptionRepository";
import ReceiptsListsRepository from "app/Repositories/Receipts/Data/ReceiptsListsRepository";
import TransactionsListsRepository from "app/Repositories/Transactions/Data/TransactionsListsRepository";
import ReceiptsImagesListsRepository from "app/Repositories/Receipts/Images/Data/ReceiptsImagesListsRepository";

export const backupKey = 'rdfSr$#te34t34T#$534tF#EWF$#Tag4wepappp';

class ExportDataService {
    async execute () : Promise<string>
    {
        const receipts = await ReceiptsListsRepository.getAll({});
        const receiptsImages = await ReceiptsImagesListsRepository.getAll({});
        const transactions = await TransactionsListsRepository.getAll({});
        const originalFiles = await ReceiptsListsRepository.getAllFiles(receiptsImages);

        const files = [];

        for (const index in originalFiles) {
            if (Object.prototype.hasOwnProperty.call(originalFiles, index)) {
                const value = originalFiles[index];
                files.push({
                    ...value,
                    base64: await value.base64(),
                    ...(await value.dates()),
                });
            }
        }

        const data = {
            files, 
            receipts,
            transactions,
            receiptsImages,
        };

        const encryptedData = await EncryptionRepository.encrypt({
            key: backupKey,
            data,
        });

        return `data:text:plain;base64,${encryptedData}`;
        
    }
}

export default ExportDataService;