import { Provider as ReduxProvider } from 'react-redux';
import React from 'react';
import { ActivityIndicator, StatusBar, Text, View } from 'react-native';
import { store } from './src/store';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ReduxProvider store={store}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? (
        <View>
          <Text>Open up App.tsx to start working on your app!</Text>
        </View>
      ) : <ActivityIndicator /> }
    </ReduxProvider>
  );
}
