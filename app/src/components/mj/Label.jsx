// MeiJin-Reactnative Input

import { StyleSheet, Text } from "react-native";

export default function Label({ size, children, bold }) {
  const fontSize = styles[size] ? styles[size] : styles.normal;
  const fontWeight = bold ? styles.bold : null;
  return <Text style={[fontSize, fontWeight]}>{children}</Text>;
}

const styles = StyleSheet.create({
  sm: {
    fontSize: 12,
  },
  normal: {
    fontSize: 16,
  },
  lg: {
    fontSize: 20,
  },
  xl: {
    fontSize: 24,
  },
  bold: {
    fontWeight: "bold",
  },
});
