import { Compass } from 'lucide-react-native';

import { Container, Title } from './styles';

export function Header() {
  return (
    <Container>
      <Compass size={30} color="#fff" />
      <Title>GitExplorer</Title>
    </Container>
  );
}
