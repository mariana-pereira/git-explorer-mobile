import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <Icon name="explore" size={30} color="#fff" />
  </Container>
);

export default Header;
