import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Input, Button } from "@/components/Basic";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function LoginScreen(props) {
  React.useEffect(() => {
    props.navigation.setOptions({ title: "登录" });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons name="account" size={200} />
      </View>
      <View style={styles.loginContainer}>
        <Input title="用户名" />
        <Input title="密码" type="password" />
        <Button title="登录" />
        <View style={styles.helpContainer}>
          <Link onPress={() => props.navigation.push("SignUpScreen")}>
            注册
          </Link>
          <Link onPress={() => props.navigation.push("ForgotScreen")}>
            忘记密码
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}

function Link(props) {
  return (
    <TouchableOpacity style={{ padding: 2 }} onPress={props.onPress}>
      <Text>{props.children}</Text>
    </TouchableOpacity>
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
    margin: 20,
    backgroundColor: "#fff",
  },
  helpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
