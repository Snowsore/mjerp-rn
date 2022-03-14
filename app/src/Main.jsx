// Root warp

import { NavigationContainer } from "@react-navigation/native";
import { LoginProvider, useLogin } from "@/contexts/Login";

import Root from "./index";

export default function Main() {
  return (
    <LoginProvider>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </LoginProvider>
  );
}
