import { useEffect } from 'react';
import { View } from 'react-native';

import { Header } from '../../components/Header';
import { RepositoryList } from '../../components/RepositoryList';
import { TextInput } from '../../components/TextInput';
import { User } from '../../components/User';
import { useAppDispatch, useAppSelector } from '../../store';
import { loadUser } from '../../store/slices/user';
import { Container, Content} from './styles';

export default function Main() {
  const dispatch = useAppDispatch();

  const user = useAppSelector(state => {
    return state.user.data;
  });

  console.log(user);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <View style={{ flex: 1 }}>
      <Container>
        <Header />
        <Content>
          <TextInput />
          <User />
          <RepositoryList />
        </Content>
      </Container>
    </View>
  );
}
