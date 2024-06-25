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

export function User({ user }) {
  return (
    <Container>
      <Avatar
        source={{
          uri: user.avatar_url,
        }}
      />
      <UserInfo>
        <Name>{user.name}</Name>
        <Login>{user.login}</Login>
        <Bio>{user.bio}</Bio>
        <Button>
          <ButtonText>See in Github</ButtonText>
        </Button>
      </UserInfo>
      <UserStats>
        <StatsContainer>
          <StatsName>followers</StatsName>
          <StatsValue>{user.followers}</StatsValue>
        </StatsContainer>
        <StatsContainer>
          <StatsName>following</StatsName>
          <StatsValue>{user.following}</StatsValue>
        </StatsContainer>
        <StatsContainer>
          <StatsName>repos</StatsName>
          <StatsValue>{user.public_repos}</StatsValue>
        </StatsContainer>
      </UserStats>
    </Container>
  );
}
