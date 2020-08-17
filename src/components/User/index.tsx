import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ApplicationState } from '../../store';
import * as UserActions from '../../store/ducks/user/actions';

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

const User: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: ApplicationState) => state.user.data);

  useEffect(() => {
    dispatch(UserActions.loadRequest());
  }, [dispatch]);

  return (
    <Container>
      <Avatar
        source={{
          uri:
            'https://avatars0.githubusercontent.com/u/26336279?s=460&u=5b67ae546af49ac00ca125f373a3bbaf45a5f765&v=4',
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
};

export default User;
