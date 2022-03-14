import { useState, useEffect, useRef } from "react";
import { AppState, StatusBar } from "react-native";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import Home from "./pages/Home";
import Scan from "./pages/Scan";
import Login from "./pages/Login";
import Production from "./pages/Production";
import About from "./pages/About";

import { LoginProvider, useLogin } from "@/contexts/Login";

const Stack = createStackNavigator();

export default function Root() {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const [login, setLogin] = useLogin();

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        console.log("App has come to the foreground!");
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log("AppState", appState.current);

      if (appState.current == "active") {
        // Go active
        console.log(login);
      } else {
        // Go background
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Production" component={Production} />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="About" component={About} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
