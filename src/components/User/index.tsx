import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ApplicationState } from '../../store';
import * as RepositoriesActions from '../../store/ducks/repositories/actions';

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
    dispatch(RepositoriesActions.loadRequest(user?.login));
  }, [dispatch, user]);

  return (
    <Container>
      {user && (
        <>
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
        </>
      )}
    </Container>
  );
};

export default User;
