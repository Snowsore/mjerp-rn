import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import { navigation } from "@refs/NavigationRef";

import { Button, Input, Field, Flex, Link, Label, Loading } from "@components";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { useLogin } from "@contexts/LoginContext";

import { getLogin, postLogin } from "@js/api";

import { setItemAsync, getItemAsync } from "expo-secure-store";

import { useTheme } from "@contexts/ThemeContext";

export default LoginScreen = (props) => {
  useEffect(async () => {
    props.navigation.setOptions({ headerShown: false, title: "登录" });
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Card />
    </View>
  );
};

const Card = (props) => {
  const [login, setLogin] = useLogin();
  const [isFetch, setFetch] = useState(true);

  useEffect(async () => {
    try {
      setLogin(await getLogin());

      // Test
      navigation.navigate("Product", {
        screen: "InfosScreen",
        params: { pid: "2201153101" },
      });
    } catch (err) {
      console.log(err);
      setFetch(false);
    }
  }, []);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      padding: 20,
      margin: 20,
      elevation: 4,
      borderRadius: 10,
    },
  });

  if (isFetch) return <Loading />;

  return (
    <View style={styles.container}>
      <Header />
      <LoginForm />
      <LinkRow />
    </View>
  );
};

const Header = () => {
  const [theme, setTheme] = useTheme();

  const styles = StyleSheet.create({
    container: {
      height: 100,
      alignItems: "center",
    },
  });

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="account" size={140} color={theme} />
    </View>
  );
};

const LoginForm = () => {
  const [login, setLogin] = useLogin();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const secureStore = {
    async save() {
      await setItemAsync("user", JSON.stringify({ phone, password }));
    },
    async load() {
      const user = JSON.parse(await getItemAsync("user"));
      if (user) {
        setPhone(user.phone);
        setPassword(user.password);
      }
    },
  };

  const onPress = async () => {
    try {
      const user = await postLogin({ phone, password });
      setLogin(user);
      await secureStore.save();
      navigation.navigate("Home");
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(async () => {
    await secureStore.load();
  }, []);

  return (
    <Flex gap={10}>
      <Field title="手机号">
        <Input value={phone} onChange={setPhone} type="number" />
      </Field>
      <Field title="密码">
        <Input value={password} onChange={setPassword} type="password" />
      </Field>
      <Button onPress={onPress}>登录</Button>
    </Flex>
  );
};

const LinkRow = (props) => {
  const styles = StyleSheet.create({
    container: {
      paddingVertical: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
    },
  });

  return (
    <View style={styles.container}>
      <Link to="SignUpScreen">
        <Label size="lg">注册</Label>
      </Link>
      <Link to="ForgotScreen">
        <Label size="lg">忘记密码</Label>
      </Link>
    </View>
  );
};
