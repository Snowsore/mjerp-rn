// MeiJin-Reactnative Input

import React from "react";
import { View, StyleSheet, Button as NativeButton } from "react-native";

export default function Button(props) {
  return (
    <View style={styles.container}>
      <NativeButton style={styles.label} title={props.title} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  label: {
    position: "absolute",
    marginLeft: 20,
    paddingHorizontal: 8,
    backgroundColor: "#fff",
  },
  textContainer: {
    margin: 8,
    padding: 10,
    borderWidth: 1,
    justifyContent: "space-between",
  },
  input: {},
});
