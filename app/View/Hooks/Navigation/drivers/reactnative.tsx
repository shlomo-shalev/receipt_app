import uuid from "uuid-random";
import { useEffect, useRef, useState } from 'react';
import { StackActions, useNavigation } from '@react-navigation/native';

// Route apis
import FinalRouteData from "route/Core/FinalRouteData";

const routeData: Object = FinalRouteData.getConfiguration();

function getFullPath (prefix, path) {
    return `${prefix}${path}`.replace(/\/+/g, '/'); 
}

function findDynamicPathMatch (path, pathToMatch) {
    const data = {};
    const fullPathSplit = path.split('/').filter(v => v && v.length > 0);
    const fullPathToMatchSplit = pathToMatch.split('/').filter(v => v && v.length > 0);

    const fullPathData = fullPathSplit.map((v, i) => {

        if (fullPathToMatchSplit[i].includes(':')) {
            const key = fullPathToMatchSplit[i].replaceAll(':', '');
            data[key] = v;
            return fullPathToMatchSplit[i];
        }
        else return v;
    });

    const finalFullPath = `/${fullPathData.join('/')}`.replace(/\/+/g, '/');  
    
    return {
        match: pathToMatch === finalFullPath,
        finalPathToMatch: finalFullPath,
        data,
    }
}

export const back = () => {

    return (defaultRoute) => {
        // if (location.key !== 'default') {
            // navigate(-1);
        //  } else {
            // console.log('defaultRoute', defaultRoute);
            // navigate(defaultRoute, { replace: true });
        //  }
    };
};

export const move = () => {
    const navigate = useNavigation();
    return (path: string, data?: Object) => {
        const originalPath = path;
        path = path === '/' ? 'Home' : path;
            
        let pathData = {};
        
        // console.log('routeData', routeData);
        

        const isMatch = Object.keys(routeData).filter(id => {
            const data = routeData[id];
            const fullPath = getFullPath(data.prefix, data.path);

            return fullPath === originalPath;
        }).length > 0;        

        if (!isMatch){
            const dynamicPagesIds = Object.keys(routeData).filter(id => {
                const data = routeData[id];
                const fullPath = getFullPath(data.prefix, data.path);
                return fullPath.includes(':');
            });
            
            let dynamicPagesMatch = dynamicPagesIds.filter(id => {
                const localPathData = routeData[id];
                const fullPath = getFullPath(localPathData.prefix, localPathData.path);               
                
                return findDynamicPathMatch(originalPath, fullPath).match;
            });
            
            if (dynamicPagesMatch && dynamicPagesMatch[0]) {
                const localPathData = routeData[dynamicPagesMatch[0]];
                const fullPath = getFullPath(localPathData.prefix, localPathData.path);
                const { data } = findDynamicPathMatch(originalPath, fullPath);             
                                
                path = fullPath;
                pathData = data;
            }
            else {
                // TODO - create 404 page
                path = 'Home';
            }
        }
        

        navigate.dispatch(
            StackActions.replace(path, {data: data || {}, pathData, index: 0})
        );
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
        start: false,
        pathname: '/',
        pathData: {},
        stateData: {},
    });

    const idRef = useRef(null);

    if (!idRef.current) {
        idRef.current = uuid();
    }

    const {current: id} = idRef;

    funcsToListen[id] = (data: {pathname: string, pathData: object, state: object}) => {
        const pathname = data.pathname === 'Home' ? '/' : data.pathname;

        setState(state => ({
            ...state,
            start: true,
            pathname,
            pathData: data.pathData,
            stateData: data.state,
        }));
    };

    funcsIdsToListen = [...new Set([...funcsIdsToListen, id])]

    useEffect(() => {

        return () => {
            delete funcsToListen[id];
            funcsIdsToListen = funcsIdsToListen.filter(uuid => uuid !== id);
        }
    }, []);

    const data = {
        start: state.start,
        pathname: state.pathname,
        params: {
            path: state.pathData,
            state: state.stateData,
        },
    };

    return data;
};

export default {
    move,
    listen,
    onChangeRoutePath,
}