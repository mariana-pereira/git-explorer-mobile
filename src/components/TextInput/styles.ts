import styled from 'styled-components/native';

export const InputContainer = styled.View`
  width: 100%;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  background-color: ${(props) => props.theme.colors.buttonText};
  width: 300px;
  height: 32px;
  margin-right: 5px;
  border: 0;
  padding: 10px;
  border-radius: 6px;
`;

export const Button = styled.TouchableOpacity`
  height: 32px;
  width: 32px;
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme.colors.primary};
  align-items: center;
  justify-content: center;
`;
