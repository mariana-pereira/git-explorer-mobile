import 'react-native-gesture-handler';

import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import usePersistedState from './utils/usePersistedState';

import store from './store';

import Routes from './routes';
import Header from './components/Header';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" backgroundColor="#28a745" />
          <Header toggleTheme={toggleTheme} />
          <Routes />
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
