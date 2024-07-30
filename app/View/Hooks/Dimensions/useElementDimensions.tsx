import { getElementDimensions } from "app/View/Hooks/Dimensions/drivers/__DOM_DRIVER__";

function useElementDimensions(ref) : {width: Number, height: Number} 
{   
    const dimensions = getElementDimensions(ref);

    return dimensions;
}

export default useElementDimensions;