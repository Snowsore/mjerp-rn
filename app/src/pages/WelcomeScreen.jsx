import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default function WelcomeScreen({ route }) {
  const name = route.params ? route.params.name : "";
  return (
    <View>
      <Text>Welcome</Text>
      <Text>{name}</Text>
      <Text>{name}</Text>
      <Text>{name}</Text>
      <Text>{name}</Text>
      <Text>{name}</Text>
      <Text>{name}</Text>
      <Text>{name}</Text>
      <Text>{name}</Text>
      <Text>{name}</Text>
      <Text>{name}</Text>
      <Text>{name}</Text>
      <Text>{name}</Text>
      <Text>{name}</Text>
      <Text>{name}</Text>
      <Text>{name}</Text>
      <Text>{name}</Text>
      <Text>{name}</Text>
      <Text>{name}</Text>
      <Text>{name}</Text>
      <Text>{name}</Text>
      <Text>{name}</Text>
    </View>
  );
}
