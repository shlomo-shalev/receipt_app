// Api
import { get as getFile } from "app/View/Bootstrap/Storage/File";
import { getAll } from "app/View/Bootstrap/Storage/Big/drivers/__DOM_DRIVER__";

// Interfaces
import { file } from "app/View/Bootstrap/Storage/File";
import { receiptsImage } from "app/Repositories/Transactions/Transaction/TransactionRepository";

class ReceiptsListsRepository {    
    static async getAll({}) : Promise<[]>
    {
        const data = await getAll({
            table: 'receipts',
        });

        return data;
    }

    static async getAllFiles(receiptsImages: receiptsImage[]) : Promise<file[]>
    {
        const files = [];

        for (const key in receiptsImages) {
            if (Object.prototype.hasOwnProperty.call(receiptsImages, key)) {
                const receiptsImage: receiptsImage = receiptsImages[key];
                const file = await getFile(receiptsImage.url);
                file.url = receiptsImage.url;
                
                files.push(file);
            }
        }

        return files;
    }
}

export default ReceiptsListsRepository;