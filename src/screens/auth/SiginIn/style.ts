import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.neutral_1};
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 200px;
`;
export const Logo = styled.Image`
  width: 232px;
  height: 96px;
`;
export const Form = styled.View`
  width: 90%;
  margin-top: 25px;
`;
