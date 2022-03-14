import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Button, Input, Field, Flex } from "@/components/mj";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import api from "@/js/api";

export default function LoginScreen(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    props.navigation.setOptions({ title: "登录" });
  }, []);

  const postLogin = async () => {
    const res = await api.postLogin(username, password);
    alert(res.msg);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons name="account" size={200} />
      </View>
      <View style={{ padding: 24 }}>
        <Flex gap={10}>
          <Field title="用户名">
            <Input onChange={setUsername} />
          </Field>
          <Field title="密码">
            <Input onChange={setPassword} type="password" />
          </Field>
          <Button title="登录" onPress={postLogin} />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Link onPress={() => props.navigation.push("SignUpScreen")}>
              注册
            </Link>
            <Link onPress={() => props.navigation.push("ForgotScreen")}>
              忘记密码
            </Link>
          </View>
        </Flex>
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
