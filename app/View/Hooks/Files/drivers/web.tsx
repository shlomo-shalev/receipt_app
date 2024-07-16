export function getFiles() 
{
    return {
        waitPullFiles: getList(),
    };
}

export function openAppSettings () {

}

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
