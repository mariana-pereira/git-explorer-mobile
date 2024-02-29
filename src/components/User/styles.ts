import styled from 'styled-components/native';

export const Container = styled.View`
  width: 95%;
  background-color: #fff;
  margin-top: 10px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #444;
`;

export const UserInfo = styled.View`
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.Text`
  font-size: 18px;
  color: #111;
  font-family: 'Roboto_700Bold';
`;

export const Login = styled.Text`
  font-size: 16px;
  margin-top: 6px;
  color: #444;
  font-family: 'Roboto_400Regular';
`;

export const Bio = styled.Text`
  margin-top: 10px;
  color: #444;
  max-width: 100%;
  font-family: 'Roboto_400Regular';
`;

export const Button = styled.TouchableOpacity`
  width: 250px;
  height: 28px;
  border: 0;
  border-radius: 6px;
  align-self: center;
  margin-top: 50px;
  background-color: #28a745;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-family: 'Roboto_700Bold';
`;

export const UserStats = styled.View`
  width: 100%;
  margin-top: 25px;
  flex-direction: row;
  justify-content: space-between;
`;

export const StatsContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const StatsName = styled.Text`
  font-size: 18px;
  color: #111;
  font-family: 'Roboto_700Bold';
`;

export const StatsValue = styled.Text`
  font-size: 16px;
  color: #444;
  font-family: 'Roboto_400Regular';
`;
