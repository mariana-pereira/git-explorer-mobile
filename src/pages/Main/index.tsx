import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as UserActions from '../../store/ducks/user/actions';

import Header from '../../components/Header';
import User from '../../components/User';
import RepositoryList from '../../components/RepositoryList';

import { Container, Content, InputContainer, Input, Button } from './styles';

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [visible, setVisible] = useState(false);

  function fetchUser() {
    dispatch(UserActions.loadRequest(username));
    setVisible(true);
  }

  return (
    <View style={{ flex: 1 }}>
      <Container>
        <Header />
        <Content>
          <InputContainer>
            <Input
              placeholder="Username"
              onChangeText={(text) => setUsername(text)}
            />
            <Button onPress={fetchUser}>
              <Icon name="search" size={20} color="#fff" />
            </Button>
          </InputContainer>
          {visible && (
            <>
              <User />
              <RepositoryList />
            </>
          )}
        </Content>
      </Container>
    </View>
  );
};

export default Main;
