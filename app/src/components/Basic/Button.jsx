// MeiJin-Reactnative Input

import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function Button(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: "#ccc",
  },
  text: {
    fontSize: 30,
  },
});
