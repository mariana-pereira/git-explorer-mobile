import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';

import { AppRoutes } from './src/routes';
import { store } from './src/store';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <AppRoutes /> : <ActivityIndicator /> }
      </NavigationContainer>
    </ReduxProvider>
  );
}
