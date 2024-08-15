import { listen } from 'app/View/Hooks/Navigation/drivers/__DOM_DRIVER__';

function useListenRoutePath() {    
    const data = listen();

    return {
        start: data.start,
        pathname: data.pathname,
        params: data.params,
    };
}

export default useListenRoutePath;