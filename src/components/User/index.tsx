import React from 'react';

import {
  Avatar,
  Bio,
  Button,
  ButtonText,
  Container,
  Login,
  Name,
  StatsContainer,
  StatsName,
  StatsValue,
  UserInfo,
  UserStats,
} from './styles';

const User: React.FC = () => {
  return (
    <Container>
      <Avatar
        source={{
          uri:
            'https://avatars0.githubusercontent.com/u/26336279?s=460&u=5b67ae546af49ac00ca125f373a3bbaf45a5f765&v=4',
        }}
      />
      <UserInfo>
        <Name>Mariana Pereira</Name>
        <Login>mariana-pereira</Login>
        <Bio>FullStack Developer | Node.js | ReactJS | React Native</Bio>
        <Button>
          <ButtonText>See in Github</ButtonText>
        </Button>
      </UserInfo>
      <UserStats>
        <StatsContainer>
          <StatsName>followers</StatsName>
          <StatsValue>10</StatsValue>
        </StatsContainer>
        <StatsContainer>
          <StatsName>following</StatsName>
          <StatsValue>54</StatsValue>
        </StatsContainer>
        <StatsContainer>
          <StatsName>repos</StatsName>
          <StatsValue>99</StatsValue>
        </StatsContainer>
      </UserStats>
    </Container>
  );
};

export default User;
