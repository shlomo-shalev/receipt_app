// Tools
import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Configurations
import 'route/Paths';

// Core
import FinalRouteData from 'route/Core/FinalRouteData';

// bootstrap
import { Stack } from 'app/View/Bootstrap/reactnative';
import { onChangeRoutePath } from 'app/View/Hooks/Navigation/drivers/reactnative';

function Router() {
  const data: Object = FinalRouteData.getConfiguration();
  
  return (
    <Stack.Navigator
      screenListeners={{
        state: (e) => {          
          const routeData = (e.data?.state?.routes || [{name: 'Home'}]);
          const pathname = routeData[e.data?.state.index || 0].name;
          
          onChangeRoutePath({pathname});
        },
      }}
      screenOptions={{ 
        animation: 'none',
      }}
    >
      {Object.keys(data).map((uuid) => {
        const params = data[uuid];

        let path = params.path;
        path = path === '/' ? 'Home' : path;
        
        return (
          <Stack.Screen
            name={path}
            key={uuid}
            component={params.component}
            options={{
              header: () => null,
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
}

export default Router;
