import styled from 'styled-components/native';

export const Container = styled.View`
  height: 90px;
  background: ${(props) => props.theme.colors.primary};
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 5px 15px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.colors.buttonText};
  margin-left: 5px;
  font-family: ${(props) => props.theme.fonts.regular};
`;

export const Logo = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;
