import React from "react";

import Info from "./Info";
import Infos from "./Infos";
import Form from "./Form";
import Worker from "./Worker";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Login(props) {
  return (
    <Stack.Navigator initialRouteName="Infos">
      <Stack.Screen name="Info" component={Info} />
      <Stack.Screen name="Infos" component={Infos} />
      <Stack.Screen name="Form" component={Form} />
      <Stack.Screen name="Worker" component={Worker} />
    </Stack.Navigator>
  );
}
