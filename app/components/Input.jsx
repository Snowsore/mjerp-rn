// MeiJin-Reactnative Input

import { TextInput } from "react-native";

export default function Input(props) {
  const type = getType(props.type);

  return (
    <TextInput
      value={String(props.value)}
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
