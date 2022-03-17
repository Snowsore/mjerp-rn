// Root warp

import { NavigationContainer } from "@react-navigation/native";
import { LoginProvider } from "@/contexts/LoginContext";

import Root from "./index";

import { AppStateManager } from "./manager/AppStateManager";
import * as NavigationBar from "expo-navigation-bar";

export default function Main() {
  NavigationBar.setBackgroundColorAsync("#E63B2E");
  NavigationBar.setBehaviorAsync("inset-swipe");
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
