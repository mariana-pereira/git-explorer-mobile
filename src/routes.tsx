import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './pages/main';
import { Repository } from './pages/repository';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="main" component={Main} />

      <Screen name="repository" component={Repository} />
    </Navigator>
  );
}
