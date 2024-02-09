import { Provider as ReduxProvider } from 'react-redux';
import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { store } from './src/store';

export default function App() {
  return (
    <ReduxProvider store={store}>
      <View>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </ReduxProvider>
  );
}
