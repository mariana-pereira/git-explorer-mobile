import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Repository from './pages/Repository';

const App = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <App.Screen name="Main" component={Main} />
    <App.Screen name="Repository" component={Repository} />
  </App.Navigator>
);

export default AuthRoutes;
