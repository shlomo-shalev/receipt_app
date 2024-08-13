import { openDB, createTable } from 'app/View/Bootstrap/Storage/Big';

export default async () => {
    await openDB();

    await createTable('receipts', [
        {name: 'company_name', type: 'varchar'},
        {name: 'price', type: 'integer'},
        {name: 'note', type: 'varchar'},
        {name: 'doc_created_at', type: 'datetime'},
        {name: 'created_at', type: 'datetime'},
        {name: 'updated_at', type: 'datetime'},
    ]);

    await createTable('receipts_images', [
        {name: 'receipt_id', type: 'integer'},
        {name: 'url', type: 'varchar'},
        {name: 'created_at', type: 'datetime'},
    ]);
    
    await createTable('transactions', [
        {name: 'company_name', type: 'varchar'},
        {name: 'price', type: 'integer'},
        {name: 'doc_created_at', type: 'datetime'},
        {name: 'created_at', type: 'datetime'},
        {name: 'updated_at', type: 'datetime'},
    ]);

    await createTable('transactions_receipts', [
        {name: 'transaction_id', type: 'integer'},
        {name: 'receipt_id', type: 'integer'},
        {name: 'created_at', type: 'datetime'},
    ]);
};



// await save('demo', {
//     name: 'blabla', 
//     description: 'bluebue',
// });

// const data = await getData({
//     table: 'demo', 
//     page: 1, 
//     order: 'desc',
// });

// console.log('data', data);