import styled from "styled-components/native";

export const Container = styled.View``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.neutral_4};
  font-size: 18px;
`;

export const ContainerInput = styled.View<{ error: boolean }>`
  background-color: ${({ theme }) => theme.colors.neutral_4};
  width: 100%;
  height: 55px;
  border-radius: 10px;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  border: 1.5px solid
    ${({ theme, error }) => (error ? theme.colors.red : theme.colors.neutral_1)};
  padding-right: 10px;
  justify-content: center;
`;

export const Input = styled.TextInput`
  font-size: 18px;
  padding-left: 5px;
`;

export const HidePaswword = styled.TouchableOpacity`
  height: 40px;
  align-items: center;
  justify-content: center;
`;
