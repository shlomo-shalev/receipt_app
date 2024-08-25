// Repositories
import ReceiptsListsRepository from "app/Repositories/Receipts/Data/ReceiptsListsRepository";
import TransactionsListsRepository from "app/Repositories/Transactions/Data/TransactionsListsRepository";
import ReceiptsImagesListsRepository from "app/Repositories/Receipts/Images/Data/ReceiptsImagesListsRepository";
import EncryptionRepository from "app/Repositories/EncryptionRepository";

class ExportTransactionsService {
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
            key: 'rdfSr$#te34t34T#$ct4te4w4yepdgepfit46345346#$%#$%@#rf34d534tF#EWF$#Tag4wepappp',
            data,
        });
        
        return encryptedData;
        
    }
}

export default ExportTransactionsService;