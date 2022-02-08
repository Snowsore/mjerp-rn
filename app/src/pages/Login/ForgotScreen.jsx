import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function ForgotScreenScreen(props) {
  React.useEffect(() => {
    props.navigation.setOptions({ title: "忘记密码" });
  }, []);

  return (
    <View style={styles.container}>
      <Text>对不起暂时不支持自主修改密码，请联系管理员</Text>
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
