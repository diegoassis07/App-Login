import Logo from "../../../assets/Logo.png";
import * as S from "./style";
import Input from "../../../components/Input";
import Spacer from "../../../components/Spacer";

export default function SignIn() {
  return (
    <S.Container>
      <S.Header>
        <S.Logo source={Logo} />
      </S.Header>

      <S.Form>
        <Input title="E-mail:" type={"email"} placeholder="Ex: Diego@gmail.com" />
        <Spacer height={30} />
        <Input title="Senha:" type={"password"} placeholder="********" />
      </S.Form>
    </S.Container>
  );
}
