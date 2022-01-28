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

  const onPressHandler = (e) => {
    inputRef.current.focus();
  };

  return (
    <TouchableWithoutFeedback onPress={onPressHandler}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} ref={inputRef} type={props.type} />
        </View>
        <Text style={styles.label}>{props.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  inputContainer: {
    marginTop: 8,
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
  },
  label: {
    position: "absolute",
    marginLeft: 10,
    paddingHorizontal: 8,
    backgroundColor: "#fff",
  },
});
