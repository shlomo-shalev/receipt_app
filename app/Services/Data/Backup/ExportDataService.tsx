// Repositories
import EncryptionRepository from "app/Repositories/EncryptionRepository";
import ReceiptsListsRepository from "app/Repositories/Receipts/Data/ReceiptsListsRepository";
import TransactionsListsRepository from "app/Repositories/Transactions/Data/TransactionsListsRepository";
import ReceiptsImagesListsRepository from "app/Repositories/Receipts/Images/Data/ReceiptsImagesListsRepository";

export const backupKey = 'rdfSr$#te34t34T#$ct4te4w4yepdgepfit46345346#$%#$%@#rf34d534tF#EWF$#Tag4wepappp';

class ExportDataService {
    async execute () : Promise<string>
    {
        const receipts = await ReceiptsListsRepository.getAll({});
        const receiptsImages = await ReceiptsImagesListsRepository.getAll({});
        const transactions = await TransactionsListsRepository.getAll({});
        const files = await ReceiptsListsRepository.getAllFiles(receiptsImages);

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
        
        console.log('encryptedData', encryptedData);
        

        return encryptedData;
        
    }
}

export default ExportDataService;