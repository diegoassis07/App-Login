import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 55px;
  background-color: ${({ theme }) => theme.colors.neutral_3};
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: #fff;
  font-size: 20px;
`;
