import { SafeAreaView } from "react-native-safe-area-context";

import Logo from "../../../assets/Logo.png";
import theme from "../../../global/theme";
import * as S from "./style";
import Input from "../../../components/Input";

export default function SignIn() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.neutral_1 }}>
      <S.Header>
        <S.Logo source={Logo} />
      </S.Header>

      <S.Form>
        <Input type={"email"}/>
      </S.Form>
    </SafeAreaView>
  );
}
