import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

import { Input, Button } from "@/components/Basic";

export default function LoginScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 80 }}>登录</Text>
      </View>
      <View style={styles.loginContainer}>
        <Input title="用户名" />
        <Input title="密码" type="password" />
        <Button title="登录" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  header: {
    height: 200,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc",
  },
  loginContainer: {
    height: 260,
    marginTop: 40,
    marginHorizontal: 10,
    padding: 10,
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
});
