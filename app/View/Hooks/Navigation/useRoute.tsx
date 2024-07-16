import { move } from 'app/View/Hooks/Navigation/drivers/__DOM_DRIVER__';

function useRoute() {    
    const navigate = move();
    
    return {
        move: (path: string, data?: Object) => {
            return navigate(path, data);
        },
    };
}//

export default useRoute;