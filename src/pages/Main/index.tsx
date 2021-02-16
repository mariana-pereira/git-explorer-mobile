import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as UserActions from '../../store/ducks/user/actions';

import User from '../../components/User';
import RepositoryList from '../../components/RepositoryList';

import {
  Container,
  Content,
  InputContainer,
  Input,
  Button,
  Error,
} from './styles';
import { ApplicationState } from '../../store';

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [visible, setVisible] = useState(false);
  const [inputError, setInputError] = useState('');

  const error = useSelector((state: ApplicationState) => state.user.error);

  function fetchUser() {
    if (!username) {
      setInputError('Type the username');
      return;
    }

    dispatch(UserActions.loadRequest(String(username)));

    if (error) {
      setInputError('Error searching user.');
    } else {
      setVisible(true);
      setInputError('');
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Container>
        <Content>
          <InputContainer>
            <Input
              placeholder="Username"
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="send"
              onSubmitEditing={fetchUser}
              onChangeText={(text) => setUsername(text)}
            />
            <Button onPress={fetchUser}>
              <Icon name="search" size={20} color="#fff" />
            </Button>
          </InputContainer>
          <Error>{inputError || ''}</Error>
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
