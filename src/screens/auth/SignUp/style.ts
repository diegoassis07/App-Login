import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.neutral_2};
`;
export const Content = styled.View`
  margin-top: 80px;
  align-items: center;
  gap: 20px;
`;
export const Title = styled.Text`
  font-size: 35px;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.neutral_4};
`;