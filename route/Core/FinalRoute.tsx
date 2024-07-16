import uuid from "uuid-random";

import RouteObjectParams from "route/Core/RouteObjectParams";
import HelpRoute from "route/Core/HelpRoute";
import FinalRouteData from "./FinalRouteData";

export class FinalRoute {
    constructor (
        protected params: RouteObjectParams = {},
        protected uuid = FinalRoute.getUuid(),
    ) {
        FinalRouteData.setItem(params, uuid);        
    }

    private static getUuid () : string
    {
        return uuid();
    }

    public name(name: string) : this
    {        
        const newParams = HelpRoute.setName(name, '');

        this.params = HelpRoute.mergeParams(this.params, newParams);
        FinalRouteData.setItem(this.params, this.uuid);

        return this;
    }
}

export default FinalRoute;