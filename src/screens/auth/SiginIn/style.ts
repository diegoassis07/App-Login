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
  height: 220px;
`;
export const Logo = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 232px;
  height: 96px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.neutral_4};
  font-size: 35px;
`;

export const Background = styled.View`
  background-color: ${({ theme }) => theme.colors.neutral_2};
  width: 100%;
  flex: 1;
  align-items: center;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
`;

export const Form = styled.View`
  width: 90%;
  margin-top: 25px;
`;

export const ButtonRecoveryPassword = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const TitleRecoveryPassword = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.neutral_4};
  font-size: 16px;
  text-decoration-line: underline;
`;

export const ButtonRegister = styled.TouchableOpacity`
  width: 90%;
  margin-top: 25px;
  justify-content: center;
  align-items: center;
`;

export const TitleRegister = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.neutral_4};
  font-size: 20px;
  text-decoration-line: underline;
`;
