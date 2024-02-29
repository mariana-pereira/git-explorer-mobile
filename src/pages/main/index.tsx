import { View } from 'react-native';

import { Header } from '../../components/Header';
import { RepositoryList } from '../../components/RepositoryList';
import { TextInput } from '../../components/TextInput';
import User from '../../components/User';
import { Container, Content} from './styles';

export default function Main() {
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
