import { FlatList } from 'react-native';

import { useAppSelector } from '../../store';
import { Container, Repository } from './styles';

export function RepositoryList() {
  const repositories = useAppSelector(state => {
    return state.repositories.repositories;
  });

  return (
    <Container>
      <FlatList
        data={repositories}
        renderItem={({ item }) => <Repository>{item.name}</Repository>}
        keyExtractor={(item) => String(item.id)}
      />
    </Container>
  );
}
