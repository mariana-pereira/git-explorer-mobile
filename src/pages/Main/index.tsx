import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header';
import User from '../../components/User';
import RepositoryList from '../../components/RepositoryList';

import { Container, Content, InputContainer, Input, Button } from './styles';

const Main: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <Container>
        <Header />
        <Content>
          <InputContainer>
            <Input placeholder="Username" />
            <Button>
              <Icon name="search" size={20} color="#fff" />
            </Button>
          </InputContainer>
          <User />
          <RepositoryList />
        </Content>
      </Container>
    </View>
  );
};

export default Main;
