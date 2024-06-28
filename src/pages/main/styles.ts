import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.colors.background};
`;

export const Content = styled.View`
  align-items: center;
  flex: 1;
`;
