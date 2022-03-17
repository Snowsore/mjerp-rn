// MeiJin-Reactnative Input

import {} from "react";
import { TextInput } from "react-native";

export default function Input(props) {
  const type = getType(props.type);

  const value = props.value ? props.value : "";

  return (
    <TextInput
      value={value}
      onChangeText={props.onChange}
      keyboardType={type}
      style={{ fontSize: 24 }}
      secureTextEntry={props.type == "password"}
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
