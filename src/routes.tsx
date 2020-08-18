import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Repository from './pages/Repository';
import Settings from './pages/Settings';

const App = createStackNavigator();

const Routes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <App.Screen name="Main" component={Main} />
    <App.Screen name="Repository" component={Repository} />
    <App.Screen name="Settings" component={Settings} />
  </App.Navigator>
);

export default Routes;
