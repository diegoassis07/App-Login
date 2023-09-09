import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../screens/auth/SiginIn";
import SignUp from "../screens/auth/SignUp";

export type RootAuthRoutesList = {
  SignIn: undefined;
  SignUp: undefined;
};

export default function Auth() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
