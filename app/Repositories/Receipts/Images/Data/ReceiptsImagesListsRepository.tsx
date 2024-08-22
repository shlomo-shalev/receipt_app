import { getAll } from "app/View/Bootstrap/Storage/Big/drivers/__DOM_DRIVER__";

class ReceiptsImagesListsRepository {    
    static async getAll({}) : Promise<[]>
    {
        const data = await getAll({
            table: 'receipts_images',
        });

        return data;
    }
}

export default ReceiptsImagesListsRepository;