import styled from 'styled-components/native';

export const Container = styled.View`
  width: 95%;
  background-color: ${(props) => props.theme.colors.card};
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
  background-color: ${(props) => props.theme.colors.text};
`;

export const UserInfo = styled.View`
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.colors.textTitle};
  font-family: ${(props) => props.theme.fonts.bold};
`;

export const Login = styled.Text`
  font-size: 16px;
  margin-top: 6px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.regular};
`;

export const Bio = styled.Text`
  margin-top: 10px;
  color: ${(props) => props.theme.colors.text};
  max-width: 100%;
  font-family: ${(props) => props.theme.fonts.regular};
`;

export const Button = styled.TouchableOpacity`
  width: 250px;
  height: 28px;
  border: 0;
  border-radius: 6px;
  align-self: center;
  margin-top: 50px;
  background-color: ${(props) => props.theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.buttonText};
  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.bold};
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
  color: ${(props) => props.theme.colors.textTitle};
  font-family: ${(props) => props.theme.fonts.bold};
`;

export const StatsValue = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.regular};
`;
