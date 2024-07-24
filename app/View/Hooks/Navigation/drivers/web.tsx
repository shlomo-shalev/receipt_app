import { useLocation, useNavigate } from "react-router-dom";

export const move = () => {
    const navigate = useNavigate();
    return (path: string, data?: Object) => {
        navigate(path, data);
    };
};

export const listen = () => {
    const location = useLocation();

    return {
        pathname: location.pathname,
    };
};

export default {
    move,
    listen,
}