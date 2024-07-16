import RouteObjectParams from "route/Core/RouteObjectParams";
import FinalRoute from "route/Core/FinalRoute";
import HelpRoute from "route/Core/HelpRoute";

export class RouteProccess {
    constructor (
        protected params: RouteObjectParams = {},
    ) {}

    public get(path: string, component: (props: Object) => JSX.Element) : FinalRoute
    {
        const newParams = HelpRoute.setGetPath(path, component);

        return new FinalRoute(HelpRoute.mergeParams(this.params, newParams));
    }

    public prefix(prefix: string, name: string = '') : this
    {
        const newParams = HelpRoute.setPrefix(prefix, '', name, '');

        this.params = HelpRoute.mergeParams(this.params, newParams);

        return this;
    }

    public namefix(namefix: string) : this
    {
        const newParams = HelpRoute.setNamefix(namefix, '', '');

        this.params = HelpRoute.mergeParams(this.params, newParams);

        return this;
    }

    public name(name: string) : this
    {
        const newParams = HelpRoute.setName(name, '');

        this.params = HelpRoute.mergeParams(this.params, newParams);

        return this;
    }

    public group (func: ((route: RouteProccess) => void)) : this
    {
        const route = new RouteProccess(this.params);
        
        func(route);

        return this;
    }
}

export default RouteProccess;