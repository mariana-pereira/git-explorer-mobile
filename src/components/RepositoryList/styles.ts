import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.colors.card};
  border-radius: 10px;
  padding: 10px 20px;
  margin-top: 15px;
`;

export const Repository = styled.TouchableOpacity`
  margin-bottom: 10px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-width: 2px;
  padding-bottom: 10px;
`;

export const Name = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.textTitle};
  font-family: ${(props) => props.theme.fonts.bold};
`;

export const Language = styled.Text`
  margin-top: 10px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.regular};
`;

export const Description = styled.Text`
  margin-top: 10px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.regular};
`;
