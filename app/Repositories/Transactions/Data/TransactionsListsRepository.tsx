import { getData } from "app/View/Bootstrap/Storage/Big/drivers/__DOM_DRIVER__";

class TransactionsListsRepository {    
    static async list({}) : Promise<Object>
    {
        const data = await getData({
            table: 'transactions', 
            page: 1, 
            order: 'desc',
        });

        return data;
    }
}

export default TransactionsListsRepository;