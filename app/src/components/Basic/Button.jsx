// MeiJin-Reactnative Input

import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";

export default function Button(props) {
  return (
    <TouchableHighlight onPress={props.onPress} style={styles.container}>
      {props.children}
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 4,
  },
});
