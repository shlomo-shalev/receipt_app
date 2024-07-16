import RouteObjectParams from 'route/Core/RouteObjectParams';


export class HelpRoute {
    public static setGetPath(path: string, component: (props: Object) => JSX.Element) : RouteObjectParams
    {
        return {
            component,
            path,
            method: 'GET',
        } as RouteObjectParams;
    }

    public static setName (name: string, currentName: string) : RouteObjectParams
    {
        name = name.replace(/[\/\\]+/g, '.');

        let parts = currentName.replace(/[\/\\]+/g, '.').split('.');
        parts = parts.filter(value => value?.length > 0);        
        parts.push(name);

        return {
            name: parts.join('.').replace(/^\.|\.$/g, ''),
        } as RouteObjectParams;
    }

    public static setPrefix(prefix: string, currentPrefix: string, name: string, currentName: string) : RouteObjectParams
    {
        prefix = prefix.replace(/[\\\.]+/g, '\/');

        let parts = currentPrefix.replace(/[\.\\]+/g, '/').split('/');
        parts = parts.filter(value => value?.length > 0);        
        parts.push(prefix);

        const data: RouteObjectParams = {
            prefix: `/${parts.join('/').replace(/^\/|\/$/g, '')}`,
        };

        if (name?.length > 0) { 
            data.name = this.setName(currentName || '', name).name;
        }

        
        return data;
    }

    public static setNamefix(prename: string, currentName: string, currentPrefix: string) : RouteObjectParams
    {
        return this.setPrefix(prename, currentPrefix, prename, currentName);
    }

    public static mergeParams(currentParams: RouteObjectParams, newParams: RouteObjectParams) : RouteObjectParams
    {        
        return {
            ...currentParams,
            ...newParams,
            name: this.setName(newParams.name || '', currentParams.name || '').name,
            prefix: this.setPrefix(newParams.prefix || '', currentParams.prefix || '', '', '').prefix,
        };
    }
}

export default HelpRoute;