import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${(props) => props.theme.colors.background};
  flex: 1;
  align-items: center;
`;

export const Content = styled.View`
  background: ${(props) => props.theme.colors.card};
  border-radius: 10px;
  margin-top: 15px;
  padding: 10px;
  padding: 10px;
`;

export const RepositoryInfo = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.colors.textTitle};
  font-family: ${(props) => props.theme.fonts.bold};
`;

export const Description = styled.Text`
  font-size: 16px;
  margin-top: 10px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.regular};
`;

export const InfoContainer = styled.View`
  min-width: 230px;
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Info = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.regular};
`;

export const Button = styled.TouchableOpacity`
  width: 250px;
  height: 28px;
  border: 0;
  border-radius: 6px;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.buttonText};
  font-family: ${(props) => props.theme.fonts.bold};
`;

export const StatsContainer = styled.View`
  margin-top: 30px;
  width: 300px;
  align-self: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Stats = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.textTitle};
  font-family: ${(props) => props.theme.fonts.bold};
`;

export const Value = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.regular};
`;
