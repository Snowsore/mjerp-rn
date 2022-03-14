// Frame for app
import { StyleSheet, View, Text } from "react-native";

function Field(props) {
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
  });

  const label = <Text style={styles.label}>{props.title}</Text>;

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>{props.children}</View>
      {label}
    </View>
  );
}

export default Field;
