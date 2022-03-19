import { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { Button, Input, Field, Flex } from "@/components/mj";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { useLogin } from "@/contexts/LoginContext";

import { postLogin } from "@/js/api";

import { setItemAsync, getItemAsync } from "expo-secure-store";

export default function LoginScreen(props) {
  const [login, setLogin] = useLogin();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  useEffect(async () => {
    props.navigation.setOptions({ title: "登录" });

    const user = JSON.parse(await getItemAsync("user"));
    if (user) {
      setPhone(user.phone);
      setPassword(user.password);
    }
  }, []);

  const getLogin = async () => {
    try {
      await setItemAsync("user", JSON.stringify({ phone, password }));
      setLogin(await postLogin({ phone, password }));
      props.navigation.goBack();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <Flex gap={10}>
        <Field title="手机号">
          <Input value={phone} onChange={setPhone} type="number" />
        </Field>
        <Field title="密码">
          <Input value={password} onChange={setPassword} type="password" />
        </Field>
        <Button title="登录" onPress={getLogin} />
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
  );
}

const Header = () => {
  return (
    <View style={styles.header}>
      <MaterialCommunityIcons name="account" size={200} />
    </View>
  );
};

function Link(props) {
  return (
    <TouchableOpacity style={{ padding: 2 }} onPress={props.onPress}>
      <Text>{props.children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  header: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
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
