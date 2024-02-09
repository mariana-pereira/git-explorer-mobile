import { Provider as ReduxProvider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { store } from './src/store';

export default function App() {
  return (
    <ReduxProvider store={store}>
      <View>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </ReduxProvider>
  );
}