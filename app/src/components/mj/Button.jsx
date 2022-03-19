// MeiJin-Reactnative Input

import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function Button(props) {
  const styles = StyleSheet.create({
    container: {
      padding: 10,
      borderRadius: 4,
      backgroundColor: "crimson",
    },
    text: {
      fontSize: 20,
      textAlign: "center",
      color: "white",
    },
  });

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  );
}
