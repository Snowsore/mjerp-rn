import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, View, StyleSheet, Button } from "react-native";
import { useTailwind } from "tailwind-rn";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

const Tab = createStackNavigator();

import AnnounceScreen from "./AnnounceScreen";
import WelcomeScreen from "./WelcomeScreen";
import ProfileScreen from "./ProfileScreen";

export default function HomeScreen({ navigation }) {
  const tailwind = useTailwind();

  return (
    <View style={tailwind("w-full h-full")}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}
      >
        <Tab.Screen name="Welcome" component={AnnounceScreen} />
        <Tab.Screen name="Profile" component={WelcomeScreen} />
        <Tab.Screen name="A" component={WelcomeScreen} />
        <Tab.Screen name="C" component={WelcomeScreen} />
        <Tab.Screen name="F" component={WelcomeScreen} />
      </Tab.Navigator>
      <View style={tailwind("w-full absolute bottom-0")}>
        <View
          style={tailwind(
            "w-full p-2 border-2 flex-row items-center justify-center"
          )}
        >
          <TouchableOpacity
            onPress={(e) => navigation.navigate("Welcome", { name: "Welcome" })}
          >
            <Text style={tailwind("border-2 p-2")}>Welcome</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={(e) => navigation.navigate("A", { name: "A" })}
          >
            <Text style={tailwind("border-2 p-2")}>A</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={(e) => navigation.navigate("F", { name: "F" })}
          >
            <Text style={tailwind("border-2 p-2")}>F</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={(e) => navigation.push("Scan", { name: "Jane" })}
          >
            <Text style={tailwind("border-2 p-2")}>Scan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={(e) => navigation.push("Settings", { name: "Jane" })}
          >
            <Text style={tailwind("border-2 p-2")}>Setting</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={tailwind("border-2 p-2")}>Goood</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
