import React from 'react';
import { useSelector } from 'react-redux';

import { FlatList } from 'react-native';
import { ApplicationState } from '../../store';

import { Container, Repository, Name, Language, Description } from './styles';

const RepositoryList: React.FC = () => {
  const repositories = useSelector(
    (state: ApplicationState) => state.repositories.data,
  );

  return (
    <Container>
      {repositories && (
        <FlatList
          data={repositories}
          renderItem={({ item }) => (
            <Repository>
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
