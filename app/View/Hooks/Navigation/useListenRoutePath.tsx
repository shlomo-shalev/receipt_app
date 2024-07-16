import { listen } from 'app/View/Hooks/Navigation/drivers/__DOM_DRIVER__';

function useListenRoutePath() {    
    const data = listen();

    return {
        pathname: data.pathname,
    };
}

export default useListenRoutePath;