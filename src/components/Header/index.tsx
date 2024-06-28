import { Compass } from 'lucide-react-native';
import React, { useContext, useState } from 'react';
import { Switch } from 'react-native';
import { ThemeContext } from 'styled-components';

import { Container, Logo, Title } from './styles';

interface Props {
  toggleTheme(): void;
}

export function Header({ toggleTheme }: Props) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <Logo>
        <Compass size={30} color="#fff" />
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
}
