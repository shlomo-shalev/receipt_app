import uuid from "uuid-random";
import { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export const move = () => {
    const navigate = useNavigation();
    return (path: string, data?: Object) => {
        path = path === '/' ? 'Home' : path;        
        return navigate.navigate(...([path, data] as never));
    };
};

const funcsToListen = {};
var funcsIdsToListen = [];

export let onChangeRoutePath = (data) => {    
    for (const id of funcsIdsToListen) {
        funcsToListen[id](data);
    }
};

export const listen = () => {

    const [state, setState] = useState({
        pathname: '/',
    });

    const idRef = useRef(null);

    if (!idRef.current) {
        idRef.current = uuid();
    }

    const {current: id} = idRef;

    funcsToListen[id] = (data: {pathname: string}) => {
        const pathname = data.pathname === 'Home' ? '/' : data.pathname;

        setState({
            pathname,
        });
    };

    funcsIdsToListen = [...new Set([...funcsIdsToListen, id])]

    useEffect(() => {

        return () => {
            delete funcsToListen[id];
            funcsIdsToListen = funcsIdsToListen.filter(uuid => uuid !== id);
        }
    }, []);

    return {
        pathname: state.pathname,
    };
};

export default {
    move,
    listen,
    onChangeRoutePath,
}