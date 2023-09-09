import Logo from "../../../assets/Logo.png";
import * as S from "./style";
import Input from "../../../components/Input";
import Spacer from "../../../components/Spacer";
import Button from "../../../components/Button";
import { View } from "react-native";

export default function SignIn() {
  return (
    <S.Container>
      <S.Header>
        <S.Logo source={Logo} />
      </S.Header>

      <S.Background>
        <Spacer height={30} />
        <S.Title>Login</S.Title>

        <Spacer height={5} />
        <S.Form>
          <Input
            title="E-mail:"
            type={"email"}
            placeholder="Ex: Diego@gmail.com"
            error={true}
          />
          <Spacer height={30} />
          <Input
            title="Senha:"
            type={"password"}
            placeholder="********"
            error={false}
          />
        </S.Form>

        <Spacer height={55} />

        <View style={{ width: "90%" }}>
          <Button title="Entrar" />
        </View>
      </S.Background>
    </S.Container>
  );
}
