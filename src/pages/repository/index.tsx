import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';

import api from '../../libs/axios';
import { Container, Content, Description, Info,InfoContainer, Name, RepositoryInfo } from './styles';

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
        <RepositoryInfo>
          <Name>Tindev</Name>
          <Description>
            Aplicação desenvolvida durante a semana omnistack 8
          </Description>
          <InfoContainer>
            <Info>Javascript</Info>
            <Info>Updated 12 days ago</Info>
          </InfoContainer>
        </RepositoryInfo>
      </Content>
    </Container>
  );
}
