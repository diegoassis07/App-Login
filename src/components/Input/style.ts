import styled from "styled-components/native";

export const Container = styled.View``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.neutral_3};
  font-size: 18px;
`;

export const ContainerInput = styled.View`
  background-color: ${({ theme }) => theme.colors.neutral_3};
  width: 100%;
  height: 55px;
  border-radius: 10px;
  align-items: center;
  flex-direction: row;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Input = styled.TextInput`
  font-size: 18px;
  padding-left: 5px;
`;
