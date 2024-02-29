import { FlatList } from 'react-native';

import { useAppSelector } from '../../store';
import { Container, Description, Language, Name, Repository } from './styles';

export function RepositoryList() {
  const repositories = useAppSelector(state => {
    return state.repositories.repositories;
  });

  return (
    <Container>
      <FlatList
        data={repositories}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Repository>
            <Name>{item.name}</Name>
            <Language>Typescript</Language>
            <Description>
              Chat App API made with Node.js, Typescript, Express and MongoDB
            </Description>
          </Repository>
        )}
      />
    </Container>
  );
}
