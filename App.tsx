import * as SplashScreen from "expo-splash-screen";
import Routes from "./src/routes";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import theme from "./src/global/theme";
import { ThemeProvider } from "styled-components";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar />
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
}
