// Drivers code
import { elementToValue as originalElementToValue } from "app/View/Hooks/Form/drivers/__DOM_DRIVER__";

export function elementToValue(element)
{   
    return originalElementToValue(element) || '';
}

export default {
    elementToValue,
};