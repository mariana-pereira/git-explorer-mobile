import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import React from 'react';
import { FlatList } from 'react-native';

import { useAppDispatch, useAppSelector } from '../../store';
import { loadRepositories } from '../../store/slices/repository';
import { Container, Description, Language, Name, Repository } from './styles';

export function RepositoryList() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();

  const user = useAppSelector(state => {
    return state.user.data;
  });

  const repositories = useAppSelector(state => {
    return state.repositories.data;
  });

  useEffect(() => {
    dispatch(loadRepositories(user.login));
  }, [dispatch, user.login]);

  const handleNavigate = (repository: string) => {
    navigation.navigate('Repository', { repository });
  };

  return (
    <Container>
      <FlatList
        data={repositories}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Repository onPress={() => handleNavigate(item.full_name)}>
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
