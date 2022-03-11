import React from "react";

import Info from "./Info";
import Infos from "./Infos";
import Worker from "./Info/Worker";

import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createStackNavigator();

export default function Login(props) {
  return (
    <Stack.Navigator
      initialRouteName="Infos"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen name="Info" component={Info} />
      <Stack.Screen name="Infos" component={Infos} />
      <Stack.Screen name="Worker" component={Worker} />
    </Stack.Navigator>
  );
}
