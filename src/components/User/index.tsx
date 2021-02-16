import React from 'react';

import { User as UserI } from '../../store/ducks/user/types';

import {
  Container,
  Avatar,
  UserInfo,
  Name,
  Login,
  Bio,
  Button,
  ButtonText,
  UserStats,
  StatsContainer,
  StatsName,
  StatsValue,
} from './styles';

interface UserProps {
  user: UserI;
}

const User: React.FC<UserProps> = ({ user }) => {
  return (
    user && (
      <Container>
        <Avatar source={{ uri: user.avatar_url }} />
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
    )
  );
};

export default User;
