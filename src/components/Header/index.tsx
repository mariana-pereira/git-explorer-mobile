import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Title } from './styles';

const Header: React.FC = () => (
  <Container>
    <Icon name="explore" size={30} color="#fff" />
    <Title>GitExplorer</Title>
  </Container>
);

export default Header;
