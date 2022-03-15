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

import { useLogin } from "@/contexts/LoginContext";

import api from "@/js/api";

export default function LoginScreen(props) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useLogin();

  useEffect(() => {
    props.navigation.setOptions({ title: "登录" });
  }, []);

  const postLogin = async () => {
    try {
      const login = await api.postLogin(phone, password);
      setLogin(login);
      props.navigation.goBack();
    } catch (err) {
      alert("账号或密码错误");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons name="account" size={200} />
      </View>
      <View style={{ padding: 24 }}>
        <Flex gap={10}>
          <Field title="手机号">
            <Input onChange={setPhone} type="number" />
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
