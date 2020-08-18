import 'react-native-gesture-handler';

import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import store from './store';

import Routes from './routes';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#28a745" />
        <Header />
        <Routes />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
