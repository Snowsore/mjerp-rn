import React from "react";

import Info from "./Info";
import Infos from "./Infos";
import Manufacture from "./Manufacture";
import Inspect from "./Inspect";
import PostInfo from "./PostInfo";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Login(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
      }}
    >
      <Stack.Screen name="Info" component={Info} />
      <Stack.Screen name="Infos" component={Infos} />
      <Stack.Screen name="Manufacture" component={Manufacture} />
      <Stack.Screen name="Inspect" component={Inspect} />
      <Stack.Screen name="PostInfo" component={PostInfo} />
    </Stack.Navigator>
  );
}
