import { Compass } from 'lucide-react-native';

import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <Compass size={30} color="#fff" />
    </Container>
  );
}
