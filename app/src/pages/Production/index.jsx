import React from "react";

import Info from "./Info";
import Infos from "./Infos";
import Manufacture from "./Manufacture";
import Number from "./Number";
import Inspect from "./Inspect";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Login(props) {
  return (
    <Stack.Navigator initialRouteName="Infos">
      <Stack.Screen name="Info" component={Info} />
      <Stack.Screen name="Infos" component={Infos} />
      <Stack.Screen name="Manufacture" component={Manufacture} />
      <Stack.Screen name="Inspect" component={Inspect} />
      <Stack.Screen name="Number" component={Number} />
    </Stack.Navigator>
  );
}
