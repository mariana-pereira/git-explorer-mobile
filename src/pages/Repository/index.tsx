import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { formatDistance } from 'date-fns';
import api from '../../services/api';

import {
  Container,
  Content,
  RepositoryInfo,
  Name,
  Description,
  InfoContainer,
  Info,
} from './styles';

interface Repository {
  id: number;
  name: string;
  full_name: string;
  language: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  pushed_at: Date;
}

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const route = useRoute();
  const params = route.params as RepositoryParams;

  useEffect(() => {
    api.get(`repos/${params.repository}`).then((response) => {
      setRepository(response.data);
    });
  }, [params.repository]);

  return (
    <Container>
      <Content>
        {repository && (
          <RepositoryInfo>
            <Name>{repository?.name}</Name>
            <Description>{repository?.description}</Description>
            <InfoContainer>
              <Info>{repository?.language}</Info>
              <Info>
                {formatDistance(new Date(repository?.pushed_at), Date.now())}
              </Info>
            </InfoContainer>
          </RepositoryInfo>
        )}
      </Content>
    </Container>
  );
};

export default Repository;
