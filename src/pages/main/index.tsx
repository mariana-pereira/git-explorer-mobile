import { Header } from '../../components/Header';
import { RepositoryList } from '../../components/RepositoryList';
import { Container, Content } from './styles';

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <RepositoryList />
      </Content>
    </Container>
  );
}
