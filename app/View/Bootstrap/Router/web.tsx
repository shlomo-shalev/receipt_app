// Tools
import React, { useEffect } from "react";
import {
    Routes,
    Route,
} from "react-router-dom";

// Core Route
import 'route/Paths';
import FinalRouteData from "route/Core/FinalRouteData";

// Hooks
import useRoute from "app/View/Hooks/Navigation/useRoute";

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
            <Route 
                path="*"
                Component={() => {
                    const route = useRoute();
                    
                    useEffect(() => {
                        route.move('/');
                    }, []);

                    return null;
                }}
            />
        </Routes>
    );
}

export default Router;