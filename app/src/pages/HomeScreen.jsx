import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, View, StyleSheet, Button } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import AnnounceScreen from "./AnnounceScreen";
import WelcomeScreen from "./WelcomeScreen";
import ProfileScreen from "./ProfileScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function HomeScreen({ navigation }) {
  return (
    <Tab.Navigator backBehavior="none" initialRouteName="Profile">
      <Tab.Screen
        name="Welcome"
        component={AnnounceScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={WelcomeScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, size }) => (
            <View>
              <MaterialCommunityIcons
                name="qrcode-scan"
                color={color}
                size={35}
              />
            </View>
          ),
          tabBarOptions: { showLabel: false },
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.push("Scan");
          },
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  scanButton: {
    padding: 1,
    borderRadius: 5,
  },
});
