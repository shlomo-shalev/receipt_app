import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const move = () => {
    const navigate = useNavigate();
    return (path: string, data?: Object) => {
        navigate(path, {state: data});
    };
};

export const back = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (defaultRoute) => {
        if (location.key !== 'default') {
            navigate(-1);
         } else {
            navigate(defaultRoute, { replace: true });
         }
    };
};

export const listen = () => {
    const [start, setStart] = useState(false);

    const location = useLocation();
    const params = useParams();

    useEffect(() => {
        setStart(true);
    }, []);
    
    const data = {
        start,
        pathname: !start ? '/' : location.pathname,
        params: {
            path: !start ? {} : params,
            state: !start ? {} : (location.state || {}),
        },
    };

    return start ? data : {start: false};
};

export default {
    move,
    listen,
}