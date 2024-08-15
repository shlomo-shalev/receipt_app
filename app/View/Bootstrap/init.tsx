import { openDB } from 'app/View/Bootstrap/Storage/Big';

const tables = [
    {
        name: 'receipts',
        columns: [
            {name: 'company_name', type: 'varchar'},
            {name: 'price', type: 'integer'},
            {name: 'note', type: 'varchar'},
            {name: 'transactions_ids', type: 'TEXT'},
            {name: 'doc_created_at', type: 'datetime'},
            {name: 'created_at', type: 'datetime'},
            {name: 'updated_at', type: 'datetime'},
        ],
    },
    {
        name: 'receipts_images',
        columns: [
            {name: 'receipt_id', type: 'integer'},
            {name: 'url', type: 'varchar'},
            {name: 'created_at', type: 'datetime'},
        ],
    },
    {
        name: 'transactions',
        columns: [
            {name: 'company_name', type: 'varchar'},
            {name: 'price', type: 'integer'},
            {name: 'doc_created_at', type: 'datetime'},
            {name: 'receipts_ids', type: 'TEXT'},
            {name: 'created_at', type: 'datetime'},
            {name: 'updated_at', type: 'datetime'},
        ],
    },
];

export default async () => {
    await openDB(tables);
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