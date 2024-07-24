import { requestPermisstion, cameraExists } from "app/View/Hooks/Camera/drivers/__DOM_DRIVER__";

function useCamera() {
    
    return {
        requestPermisstion: requestPermisstion(),
        exists: cameraExists(),
    };
}

export default useCamera;