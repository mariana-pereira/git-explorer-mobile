import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as UserActions from '../../store/ducks/user/actions';
import * as RepositoriesActions from '../../store/ducks/repositories/actions';
import { ApplicationState } from '../../store';

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

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [inputError, setInputError] = useState('');
  const [visible, setVisible] = useState(false);

  const user = useSelector((state: ApplicationState) => state.user.data);
  const error = useSelector((state: ApplicationState) => state.user.error);
  const repositories = useSelector(
    (state: ApplicationState) => state.repositories.data,
  );

  useEffect(() => {
    function loadRepositories() {
      if (!user?.login) return;
      dispatch(RepositoriesActions.loadRequest(user.login));
    }

    loadRepositories();
  }, [dispatch, user]);

  function fetchUser() {
    if (!username) {
      setInputError('Type the username');
      return;
    }

    dispatch(UserActions.loadRequest(String(username)));

    if (error) {
      setInputError('Error searching user.');
    } else {
      setInputError('');
      setVisible(true);
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
          {visible && user && (
            <>
              <User user={user} />
              <RepositoryList repositories={repositories} />
            </>
          )}
        </Content>
      </Container>
    </View>
  );
};

export default Main;
