import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, View, StyleSheet, Button } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AnnounceScreen from "./AnnounceScreen";
import ProfileScreen from "./ProfileScreen";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

export default function Home({ navigation }) {
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
        component={AnnounceScreen}
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
