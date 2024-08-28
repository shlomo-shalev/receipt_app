import { getData, getAll } from "app/View/Bootstrap/Storage/Big/drivers/__DOM_DRIVER__";
import { Transaction } from "../Transaction/TransactionRepository";

class TransactionsListsRepository {    
    static async list({}) : Promise<Array<Transaction>>
    {
        let data = null;
        try {
            data = await getData({
                table: 'transactions', 
                page: 1,
                size: 200, 
                order: 'desc',
            });
        }
        catch(ex) {
            console.error(`${ex}`);
        }

        return data;
    }

    static async getAll({}) : Promise<Object>
    {
        const data = await getAll({
            table: 'transactions',
        });

        return data;
    }
}

export default TransactionsListsRepository;