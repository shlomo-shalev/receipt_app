import { 
    pickfile as basePickfile,
} from "app/View/Hooks/Choose/drivers/__DOM_DRIVER__";

export const pickfile = basePickfile;

export async function dataUrlToBase64(dataUrl) {
    const base64Data = dataUrl.split(',')[1];
    return base64Data;
}

export default {
    pickfile,
    dataUrlToBase64,
};