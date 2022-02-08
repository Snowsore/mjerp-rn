import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function SignUpScreen(props) {
  React.useEffect(() => {
    props.navigation.setOptions({ title: "注册" });
  }, []);

  return (
    <View style={styles.container}>
      <Text>对不起暂时不支持自主注册，请联系管理员</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
