import RouteObjectParams from "route/Core/RouteObjectParams";

export class FinalRouteData {
    static data = {};

    static setItem (
        params: RouteObjectParams = {},
        uuid: string,
    ) : FinalRouteData
    {
        FinalRouteData.data[uuid] = params;

        return this;
    }

    static getConfiguration () : Object 
    {
        return FinalRouteData.data;
    }

    static reset () : FinalRouteData
    {
        FinalRouteData.data = {};

        return this;
    }
}

export default FinalRouteData;