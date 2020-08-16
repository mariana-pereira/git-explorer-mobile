import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FlatList } from 'react-native';
import { ApplicationState } from '../../store';

import * as RepositoriesActions from '../../store/ducks/repositories/actions';

import { Container, Repository } from './styles';

const RepositoryList: React.FC = () => {
  const repositories = useSelector(
    (state: ApplicationState) => state.repositories.data,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadRepositories() {
      dispatch(RepositoriesActions.loadRequest());
    }

    loadRepositories();
  }, [dispatch]);

  return (
    <Container>
      <FlatList
        data={repositories}
        renderItem={({ item }) => <Repository>{item.name}</Repository>}
        keyExtractor={(item) => String(item.id)}
      />
    </Container>
  );
};

export default RepositoryList;
