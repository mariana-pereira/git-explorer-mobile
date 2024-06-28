import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { Header } from './src/components/Header';
import { AppRoutes } from './src/routes';
import { store } from './src/store';
import { dark } from './src/styles/themes/dark';
import { light } from './src/styles/themes/light';
import usePersistedState from './src/utils/usePersistedState';

export default function App() {
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
          <AppRoutes />
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
}
