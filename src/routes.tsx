import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Main from './pages/main';
import { Repository } from './pages/repository';
import Settings from './pages/settings';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Main" component={Main} />

      <Screen name="Repository" component={Repository} />
      <Screen name="Settings" component={Settings} />
    </Navigator>
  );
}
