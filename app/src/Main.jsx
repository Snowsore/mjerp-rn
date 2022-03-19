// Root warp

import { NavigationContainer } from "@react-navigation/native";
import { LoginProvider } from "@/contexts/LoginContext";

import Root from "./index";

import { AppStateManager } from "./manager/AppStateManager";

export default function Main() {
  return (
    <AppStateManager>
      <LoginProvider>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </LoginProvider>
    </AppStateManager>
  );
}
