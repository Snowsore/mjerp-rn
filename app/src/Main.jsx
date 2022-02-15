import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import "react-native-gesture-handler";

import Home from "./pages/Home";
import Scan from "./pages/Scan";
import Login from "./pages/Login";
import Production from "./pages/Production";

const Stack = createStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Production">
        <Stack.Group
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Production" component={Production} />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}
        >
          <Stack.Screen name="Scan" component={Scan} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
