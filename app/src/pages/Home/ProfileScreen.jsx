import { useEffect } from "react";

import { View, TouchableWithoutFeedback } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Label } from "@/components";

import { useLogin } from "@/contexts/LoginContext";
import { useTheme } from "@/contexts/ThemeContext";

import { getLogin } from "@/js/api";

const ProfileScreen = (props) => {
  useEffect(() => {
    props.navigation.setOptions({ title: "个人信息" });
  }, []);

  const styles = {
    container: { padding: 10 },
  };

  return (
    <View style={styles.container}>
      <ItemLogin />
      <ItemAbout />
    </View>
  );
};

export default ProfileScreen;

const ItemLogin = (props) => {
  const [login, setLogin] = useLogin();
  const navigation = props.navigation;

  const name = login.username ? login.username : "未登录";
  const phone = login.username ? `电话: ${login.phone}` : null;
  const icon = login.username ? "account" : "help";

  useEffect(async () => {
    setLogin(await getLogin());
  }, []);

  const styles = {
    container: {
      justifyContent: "center",
      alignItems: "center",
    },
  };

  const onPress = () => {
    if (login.username) navigation.push("Login", { screen: "UserScreen" });
    else navigation.push("Login", { screen: "LoginScreen" });
  };

  return (
    <Item onPress={onPress}>
      <Icon name={icon} />
      <View style={styles.container}>
        <NameLabel>{name}</NameLabel>
        <PhoneLabel>{phone}</PhoneLabel>
      </View>
    </Item>
  );
};

const NameLabel = (props) => {
  if (props.children) <Label size="xl">未登录</Label>;
  return <Label size="xl">{props.children}</Label>;
};

const PhoneLabel = (props) => {
  if (!props.children) return null;
  return <Label>{props.children}</Label>;
};

const Icon = (props) => {
  const styles = {
    container: {
      width: 40,
      height: 40,
      marginRight: 20,

      alignItems: "center",
      justifyContent: "center",
      borderRadius: 40,
      borderWidth: 1,
    },
  };

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={props.name} size={30} />
    </View>
  );
};

const ItemAbout = (props) => {
  return (
    <Item type="navigation" onPress={() => navigation.push("AboutScreen")}>
      <Label>关于</Label>
    </Item>
  );
};

const Item = (props) => {
  const styles = {
    container: {
      padding: 14,
      flexDirection: "row",
      alignItems: "center",
      borderBottomWidth: 1,
      borderColor: "lightgrey",
    },
  };

  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.container}>{props.children}</View>
    </TouchableWithoutFeedback>
  );
};
