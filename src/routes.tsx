import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './pages/main';
import { Repository } from './pages/repository';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Main" component={Main} />

      <Screen name="Repository" component={Repository} />
    </Navigator>
  );
}
