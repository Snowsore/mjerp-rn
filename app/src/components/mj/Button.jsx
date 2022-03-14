// MeiJin-Reactnative Input

import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function Button(props) {
  const styles = StyleSheet.create({
    container: {
      padding: 10,
      borderRadius: 4,
    },
    text: {
      fontSize: 20,
      textAlign: "center",
    },
    green: {
      backgroundColor: "#3c3",
      color: "#fff",
    },
    blue: {
      backgroundColor: "#35e",
      color: "#fff",
    },
  });

  const color = styles[props.template] ? styles[props.template] : styles.blue;

  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.container, color]}>
      <Text style={[styles.text, color, { backgroundColor: "transparent" }]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}
