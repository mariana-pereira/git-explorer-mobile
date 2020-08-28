import React, { useContext, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Switch } from 'react-native';
import { ThemeContext } from 'styled-components';

import { Container, Title, Logo } from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <Logo>
        <Icon name="explore" size={30} color="#fff" />
        <Title>GitExplorer</Title>
      </Logo>
      <Switch
        trackColor={{ false: colors.primaryDark, true: colors.secondary }}
        thumbColor="#fff"
        onValueChange={toggleTheme}
        value={title === 'dark'}
      />
    </Container>
  );
};

export default Header;
