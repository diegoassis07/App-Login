import Logo from "../../../assets/Logo.png";
import * as S from "./style";
import Input from "../../../components/Input";
import Spacer from "../../../components/Spacer";
import Button from "../../../components/Button";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootAuthRoutesList } from "../../../routes/auth";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type SignInScreenProps = NativeStackNavigationProp<
  RootAuthRoutesList,
  "SignIn"
>;

export default function SignIn() {
  const navigation = useNavigation<SignInScreenProps>();

  return (
    <S.Container>
      <S.Header>
        <S.Logo source={Logo} />
      </S.Header>

      <S.Background>
        <Spacer height={30} />
        <S.Title>Login</S.Title>

        <S.Form>
          <Input
            title="E-mail:"
            type={"email"}
            placeholder="Ex: Diego@gmail.com"
            error={false}
          />
          <Spacer height={20} />
          <Input
            title="Senha:"
            type={"password"}
            placeholder="********"
            error={false}
          />
        </S.Form>

        <Spacer height={20} />

        <View
          style={{
            width: "90%",
            alignItems: "flex-end",
          }}
        >
          <S.ButtonRecoveryPassword>
            <S.TitleRecoveryPassword>
              Esqueceu sua senha?
            </S.TitleRecoveryPassword>
          </S.ButtonRecoveryPassword>
        </View>

        <Spacer height={45} />

        <View style={{ width: "90%", alignItems: "center" }}>
          <Button title="Entrar" />

          <S.ButtonRegister onPress={() => navigation.navigate("SignUp")}>
            <S.TitleRegister>Crie sua conta</S.TitleRegister>
          </S.ButtonRegister>
        </View>
      </S.Background>
    </S.Container>
  );
}
