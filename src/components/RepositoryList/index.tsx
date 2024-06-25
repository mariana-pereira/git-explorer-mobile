import { useEffect } from 'react';
import { FlatList } from 'react-native';

import { useAppDispatch, useAppSelector } from '../../store';
import { loadRepositories } from '../../store/slices/repository';
import { Container, Description, Language, Name, Repository } from './styles';

export function RepositoryList() {
  const dispatch = useAppDispatch();

  const repositories = useAppSelector(state => {
    return state.repositories.data;
  });

  useEffect(() => {
    dispatch(loadRepositories());
  }, [dispatch]);

  console.log(repositories);

  return (
    <Container>
      <FlatList
        data={repositories}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Repository>
            <Name>{item.name}</Name>
            <Language>{item.language}</Language>
            <Description>
              {item.description}
            </Description>
          </Repository>
        )}
      />
    </Container>
  );
}
