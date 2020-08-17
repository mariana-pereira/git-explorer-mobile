import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';

import { ApplicationState } from '../../store';

import { Container, Repository, Name, Language, Description } from './styles';

const RepositoryList: React.FC = () => {
  const navigation = useNavigation();
  const repositories = useSelector(
    (state: ApplicationState) => state.repositories.data,
  );

  const handleNavigate = (repo: string) => {
    navigation.navigate('Repository', { repo });
  };

  return (
    <Container>
      {repositories && (
        <FlatList
          data={repositories}
          renderItem={({ item }) => (
            <Repository onPress={() => handleNavigate(item.full_name)}>
              <Name>{item.name}</Name>
              <Language>{item.language}</Language>
              <Description>{item.description}</Description>
            </Repository>
          )}
          keyExtractor={(item) => String(item.id)}
        />
      )}
    </Container>
  );
};

export default RepositoryList;
