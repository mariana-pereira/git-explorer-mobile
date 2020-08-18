import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Content = styled.View`
  background: #fff;
  border-radius: 10px;
  margin-top: 15px;
  padding: 10px;
`;

export const RepositoryInfo = styled.View`
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #111;
  font-family: 'Roboto-Bold';
`;

export const Description = styled.Text`
  font-size: 16px;
  margin-top: 10px;
  color: #444;
  font-family: 'Roboto-Regular';
`;

export const InfoContainer = styled.View`
  min-width: 230px;
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Info = styled.Text`
  color: #444;
  font-family: 'Roboto-Regular';
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
  background-color: #28a745;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-family: 'Roboto-Bold';
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
  color: #111;
  font-family: 'Roboto-Bold';
`;

export const Value = styled.Text`
  color: #444;
  font-family: 'Roboto-Regular';
`;
