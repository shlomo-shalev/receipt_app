import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";

import 'route/Paths';

// Core Route
import FinalRouteData from "route/Core/FinalRouteData";

function Router() {
    const data: Object = FinalRouteData.getConfiguration();

    return (
        <Routes>
             {Object.keys(data).map((uuid) => {
                const params = data[uuid];

                return (
                    <Route
                        key={uuid}
                        path={params.path}
                        Component={params.component}
                    />
                );
            })}
        </Routes>
    );
}

export default Router;