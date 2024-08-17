import { move, back } from 'app/View/Hooks/Navigation/drivers/__DOM_DRIVER__';

function useRoute() {    
    const navigate = move();
    const goBack = back();
    
    return {
        move: (path: string, data?: Object) => {
            return navigate(path, data);
        },
        back: (defaultRoute = '/') => {
            goBack(defaultRoute);
        },
    };
}//

export default useRoute;