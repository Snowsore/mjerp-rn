import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";
import ForgotScreen from "./ForgotScreen";
import UserScreen from "./UserScreen";
import NameUpdateScreen from "./NameUpdateScreen";
import PhoneUpdateScreen from "./PhoneUpdateScreen";
import PasswordUpdateScreen from "./PasswordUpdateScreen";

export default function Login(props) {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="ForgotScreen" component={ForgotScreen} />
      <Stack.Screen name="NameUpdateScreen" component={NameUpdateScreen} />
      <Stack.Screen name="UserScreen" component={UserScreen} />
      <Stack.Screen name="PhoneUpdateScreen" component={PhoneUpdateScreen} />
      <Stack.Screen
        name="PasswordUpdateScreen"
        component={PasswordUpdateScreen}
      />
    </Stack.Navigator>
  );
}
