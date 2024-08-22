// Tools
import { saveAs as fileSaveAs } from 'file-saver';

// Bootstrap
import { createLocalurl, dataURItoBlob } from 'app/Models/Blob/Blob';
import { save as rowSave, find } from 'app/View/Bootstrap/Storage/Big';

// Local interfaces
import { file } from '..';

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

export async function saveAs(
    { data, name, type = 'text/plain;charset=utf-8' }
    : { data: string, name: string, type?: string }
) : Promise<void>
{
    const blob = new Blob([data], { type });
    fileSaveAs(blob, name);
}

export async function get(url: string) : Promise<file>
{
    const id = parseInt((url.match(/[0-9]+$/) || [])[0]);

    const file = await find({ table: 'files', id });
    
    let fileData = null;
    
    if (file) {
        fileData = {
            id,
            name: file.name,
            type: file.type,
            dataUrl: file.dataUrl,
            url: createLocalurl(dataURItoBlob(file.dataUrl)),
            lastModified: new Date(file.created_at).getTime(),
            lastModifiedDate: new Date(file.created_at),
        }
    }

    return fileData;
}

export default {
    save,
    get,
    saveAs,
};