import { TouchableOpacity, Text, View } from "react-native";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import * as S from "./style";

export default function SignUp() {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Cadastro</S.Title>
        <Input
          error={false}
          placeholder="Ex: Gabriel Henrique"
          title="Nome"
          type={"person"}
        />

        <Input
          error={false}
          placeholder="Ex: seuemail@gmail.com"
          title="E-mail"
          type={"email"}
        />

        <Input
          error={false}
          placeholder="********"
          title="senha:"
          type={"password"}
        />
        <Input
          error={false}
          placeholder="********"
          title="Confirme sua senha:"
          type={"password"}
        />
      </S.Content>
      <View style={{width:'80%', justifyContent:'center'}}>
        <Button title="Continuar" />
      </View>
    </S.Container>
  );
}
