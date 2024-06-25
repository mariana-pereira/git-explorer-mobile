import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../store';
import { loadUser } from '../../store/slices/user';
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

export function User() {
  const dispatch = useAppDispatch();

  const user = useAppSelector(state => {
    return state.user.data;
  });

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

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
