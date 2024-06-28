import { useRoute } from '@react-navigation/native';
import { formatDistance } from 'date-fns';
import { useEffect, useState } from 'react';
import React from 'react';

import api from '../../libs/axios';
import { Button, ButtonText, Container, Content, Description, Info,InfoContainer, Name, RepositoryInfo, Stats, StatsContainer, Title, Value } from './styles';

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
  watchers_count: number;
}

interface RepositoryParams {
  repository: string;
}

export function Repository() {
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
            <Button>
              <ButtonText>See in Github</ButtonText>
            </Button>
            <StatsContainer>
              <Stats>
                <Title>stars</Title>
                <Value>{repository.stargazers_count}</Value>
              </Stats>
              <Stats>
                <Title>forks</Title>
                <Value>{repository.forks_count}</Value>
              </Stats>
              <Stats>
                <Title>issues</Title>
                <Value>{repository.open_issues_count}</Value>
              </Stats>
              <Stats>
                <Title>watchers</Title>
                <Value>{repository.watchers_count}</Value>
              </Stats>
            </StatsContainer>
          </RepositoryInfo>
        )}
      </Content>
    </Container>
  );
}
