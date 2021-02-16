import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';

import { Repository as RepositoryI } from '../../store/ducks/repositories/types';

import { Container, Repository, Name, Language, Description } from './styles';

interface RepositoriesProps {
  repositories: RepositoryI[];
}

const RepositoryList: React.FC<RepositoriesProps> = ({ repositories }) => {
  const navigation = useNavigation();

  const handleNavigate = (repository: string) => {
    navigation.navigate('Repository', { repository });
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
