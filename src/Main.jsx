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
        <Stack.Group screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            //
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Group>
        <Stack.Screen
          name="Scan"
          component={ScanScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={
              {
                // headerShown: false,
                // ...TransitionPresets.ModalPresentationIOS,
              }
            }
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
