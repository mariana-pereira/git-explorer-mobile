import React, { useContext, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Switch } from 'react-native';
import { ThemeContext } from 'styled-components';

import { Container, Title, Logo, Button } from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    toggleTheme();
  };

  return (
    <Container>
      <Logo>
        <Icon name="explore" size={30} color="#fff" />
        <Title>GitExplorer</Title>
      </Logo>
      <Switch
        trackColor={{ false: colors.primaryDark, true: colors.secondary }}
        thumbColor="#fff"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </Container>
  );
};

export default Header;
