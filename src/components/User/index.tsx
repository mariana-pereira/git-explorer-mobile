import { useAppSelector } from '../../store';
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
  const user = useAppSelector(state => {
    return state.user.data;
  });

  //console.log(avatar_img);

  return (
    <Container>
      {user && (
        <>
          <Avatar source={{ uri: user.avatar_url ? user.avatar_url : 'https://avatars.githubusercontent.com/u/26336279?s=96&v=4'}} />
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
}
