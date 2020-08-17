import React from 'react';

import {
  Container,
  Content,
  RepositoryInfo,
  Name,
  Description,
  InfoContainer,
  Info,
} from './styles';

const Repository: React.FC = () => {
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
};

export default Repository;
