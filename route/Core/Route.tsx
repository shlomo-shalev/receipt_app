import RouteProccess from 'route/Core/RouteProccess';
import HelpRoute from 'route/Core/HelpRoute';
import FinalRoute from 'route/Core/FinalRoute';
import FinalRouteData from 'route/Core/FinalRouteData';


export class Route {
    public static init ()
    {
        FinalRouteData.reset();
    }

    public static namefix(namefix: string) : RouteProccess
    {
        return new RouteProccess(HelpRoute.setNamefix(namefix, '', ''));
    }

    public prefix(prefix: string, name: string = '') : RouteProccess
    {
        return new RouteProccess(HelpRoute.setPrefix(prefix, '', name, ''));
    }

    public static get(path: string, component: (props: Object) => JSX.Element) : FinalRoute
    {
        return new FinalRoute(HelpRoute.setGetPath(path, component));
    }

    public name(name: string) : RouteProccess
    {
        return new RouteProccess(HelpRoute.setName(name, ''));
    }

    public group (func: ((route: RouteProccess) => void)) : RouteProccess
    {
        const route = new RouteProccess({});        
        func(route);

        return route;
    }
}

export default Route;