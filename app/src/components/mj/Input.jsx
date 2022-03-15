// MeiJin-Reactnative Input

import React from "react";
import {
  TouchableWithoutFeedback,
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
} from "react-native";

export default function Input(props) {
  const inputRef = React.useRef();

  const type = getType(props.type);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
    },
    inputContainer: {
      padding: 10,
      paddingTop: 14,
      borderWidth: 1,
      borderRadius: 4,
    },
    label: {
      transform: [{ translateY: -4 }],
      position: "absolute",
      marginLeft: 10,
      paddingHorizontal: 8,
      backgroundColor: "#fff",
    },
    input: {
      fontSize: 24,
    },
  });

  const onPressHandler = (e) => {
    inputRef.current.focus();
  };

  return (
    <TextInput
      value={props.value}
      onChangeText={props.onChange}
      keyboardType={type}
      style={styles.input}
      ref={inputRef}
      secureTextEntry={props.type === "password"}
    />
  );
}

const getType = (type) => {
  switch (type) {
    case "number":
      return "numeric";
    default:
      return "default";
  }
};
