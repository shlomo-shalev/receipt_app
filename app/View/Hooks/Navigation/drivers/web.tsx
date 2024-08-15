import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const move = () => {
    const navigate = useNavigate();
    return (path: string, data?: Object) => {
        navigate(path, {state: data});
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