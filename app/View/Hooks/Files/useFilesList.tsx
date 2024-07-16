import { getFiles, openAppSettings as onOpenAppSettings } from "app/View/Hooks/Files/drivers/__DOM_DRIVER__";

export const openAppSettings = onOpenAppSettings;

function useFilesList() {    
    const { waitPullFiles } = getFiles();    

    return {
        waitPullFiles,
    };
}

export default useFilesList;