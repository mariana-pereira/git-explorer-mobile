import { useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import { RepositoryList } from '../../components/RepositoryList';
import { TextInput } from '../../components/TextInput';
import { User } from '../../components/User';
import { AppDispatch } from '../../store';
import { loadRepositories } from '../../store/slices/repository';
import { loadUser } from '../../store/slices/user';
import { Container, Content } from './styles';

export default function Main() {
  const [username, setUsername] = useState('');
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  async function fetchUser() {
    dispatch(loadUser(username));
    dispatch(loadRepositories(username));
    setVisible(true);
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
