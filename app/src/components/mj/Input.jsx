// MeiJin-Reactnative Input

import { useEffect, useRef } from "react";

import { TextInput } from "react-native";

export default function Input(props) {
  const type = getType(props.type);
  const input = useRef();

  const value = props.value ? props.value : "";

  return (
    <TextInput
      ref={input}
      value={value}
      onChangeText={props.onChange}
      keyboardType={type}
      style={{ fontSize: 24 }}
      secureTextEntry={props.type == "password"}
      autoFocus={props.autoFocus}
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
