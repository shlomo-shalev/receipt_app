// Repositories
import EncryptionRepository from "app/Repositories/EncryptionRepository";
import ReceiptsListsRepository from "app/Repositories/Receipts/Data/ReceiptsListsRepository";
import TransactionsListsRepository from "app/Repositories/Transactions/Data/TransactionsListsRepository";
import ReceiptsImagesListsRepository from "app/Repositories/Receipts/Images/Data/ReceiptsImagesListsRepository";

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

        console.log('data', data);

        return {};
    }
}

export default ImportDataService;