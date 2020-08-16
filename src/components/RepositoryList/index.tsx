import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { View, Text } from 'react-native';
import { Repository } from '../../store/ducks/repositories/types';
import { ApplicationState } from '../../store';

import * as RepositoriesActions from '../../store/ducks/repositories/actions';

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
    <View>
      {repositories.map((repository: Repository) => (
        <Text key={repository.id}>{repository.name}</Text>
      ))}
    </View>
  );
};

export default RepositoryList;
