import { useState } from 'react';
import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import { RepositoryList } from '../../components/RepositoryList';
import { TextInput } from '../../components/TextInput';
import { User } from '../../components/User';
import { AppDispatch, useAppSelector } from '../../store';
import { loadUser } from '../../store/slices/user';
import { Container, Content, Error } from './styles';

export default function Main() {
  const [username, setUsername] = useState('');
  const [visible, setVisible] = useState(false);
  const [inputError, setInputError] = useState('');

  const error = useAppSelector(state => {
    return state.user.error;
  });

  const dispatch = useDispatch<AppDispatch>();

  async function fetchUser() {
    if (!username) {
      setInputError('Type the username');
      return;
    }

    dispatch(loadUser(username));

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
          <TextInput
            placeholder="Username"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="send"
            fetchUser={fetchUser}
            onSubmitEditing={fetchUser}
            onChangeText={(text: string) => setUsername(text)}
          />
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
}
