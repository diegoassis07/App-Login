import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.neutral_2};
`;
export const Content = styled.View`
  width: 90%;
  align-items: center;
  gap: 20px;
`;

export const Header = styled.View`
  height: 150px;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 35px;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.neutral_4};
`;
