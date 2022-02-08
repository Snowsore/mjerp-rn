import React from "react";

import { StyleSheet } from "react-native";

import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";
import ForgotScreen from "./ForgotScreen";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function Login(props) {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="ForgotScreen" component={ForgotScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  header: {
    height: 200,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc",
  },
  loginContainer: {
    margin: 20,
    backgroundColor: "#fff",
  },
  helpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
