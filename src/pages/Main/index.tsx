import React from 'react';
import { View } from 'react-native';

import Header from '../../components/Header';
import User from '../../components/User';
import RepositoryList from '../../components/RepositoryList';

import { Container, Content } from './styles';

const Main: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <Container>
        <Header />
        <Content>
          <User />
          <RepositoryList />
        </Content>
      </Container>
    </View>
  );
};

export default Main;
