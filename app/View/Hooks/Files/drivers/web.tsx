export function getFiles() 
{
    return {
        waitPullFiles: getList(),
    };
}

export const openAppSettings = null;

async function getList() {
    return {
        files: [],
        status: 'unsupport',
    };
}

export default {
    getFiles,
    openAppSettings,
};
