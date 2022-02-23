import React from "react";

import Info from "./Info";
import Infos from "./Infos";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

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
    </Stack.Navigator>
  );
}
