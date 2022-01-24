import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, View, StyleSheet, Button } from "react-native";
import { useTailwind } from "tailwind-rn";

export default function HomeScreen({ navigation }) {
  const tailwind = useTailwind();

  return (
    <View style={tailwind("w-full h-full items-center justify-center")}>
      <Text>Gooddddddddd</Text>
      <View>
        <Text style={tailwind("border-2 p-4 rounded-full")}>GOGOG</Text>
      </View>
      <View style={tailwind("w-full absolute bottom-0")}>
        <View
          style={tailwind(
            "w-full p-2 border-2 flex-row items-center justify-center"
          )}
        >
          <TouchableOpacity
            onPress={(e) => navigation.push("Home", { name: "Jane" })}
          >
            <Text style={tailwind("border-2 p-2")}>Goood</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={(e) => navigation.push("Profile", { name: "Jane" })}
          >
            <Text style={tailwind("border-2 p-2")}>Goood</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={(e) => navigation.push("Scan", { name: "Jane" })}
          >
            <Text style={tailwind("border-2 p-2")}>Scan</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={tailwind("border-2 p-2")}>Goood</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={tailwind("border-2 p-2")}>Goood</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
