import { View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Logo from "../../../assets/Logo.png";
import theme from "../../../global/theme";

export default function SignIn() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.neutral_1 }}>
      <Image source={Logo} />
    </SafeAreaView>
  );
}
