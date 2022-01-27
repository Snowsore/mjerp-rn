import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import "react-native-gesture-handler";

import HomeScreen from "./pages/HomeScreen";
import ProfileScreen from "./pages/ProfileScreen";
import ScanScreen from "./pages/ScanScreen";
import SettingsScreen from "./pages/SettingsScreen";

import { TouchableOpacity, Text, View, StyleSheet, Button } from "react-native";

const Stack = createStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Group>
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Scan" component={ScanScreen} />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.ModalPresentationIOS,
          }}
        >
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
