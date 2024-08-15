// Bootstrap
import { save as rowSave } from 'app/View/Bootstrap/Storage/Big';

export async function save(name: string, data: string, type: string, path: string = '') : Promise<string|false>
{
    const basePath = '/web/indexedd/files';
    const now = new Date().toISOString();

    const url = `${basePath}${path}/${name}`;
    const onlyPath = `${basePath}${path}`;
    var success = false;

    const fileId = await rowSave('files', {
        name, type,
        path: onlyPath,
        dataUrl: data,
        created_at: now,
        updated_at: now,
    });

    success = parseInt(`${fileId}`) > 0;
    const finalUrl = `${url}::${fileId}`;
    

    return success ? finalUrl : false;
}

export default {
    save,
};