import { useEffect } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { createNavigationContainerRef } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { navigation } from "@refs/RootNavigation";

import { Label } from "@components";

import { useLogin } from "@contexts/LoginContext";
import { useTheme } from "@contexts/ThemeContext";

export default ProfileScreen = (props) => {
  useEffect(() => {
    props.navigation.setOptions({ title: "个人信息" });
  }, []);

  const styles = {};

  return (
    <View style={styles.container}>
      <ItemLogin />
      <ItemAbout />
    </View>
  );
};

const ItemLogin = (props) => {
  const [login, setLogin] = useLogin();

  const name = login.username ? login.username : "未登录";
  const phone = login.username ? `电话: ${login.phone}` : null;
  const icon = login.username ? "account" : "help";

  const onPress = () => {
    if (login.username) navigation.navigate("Login", { screen: "UserScreen" });
    else navigation.navigate("Login", { screen: "LoginScreen" });
  };

  return (
    <Item onPress={onPress}>
      <Icon name={icon} />
      <View>
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
      width: 60,
      height: 60,
      marginRight: 14,

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
  const onPress = () => {
    navigation.navigate("AboutScreen");
  };

  return (
    <Item type="navigation" onPress={onPress}>
      <Label>关于</Label>
    </Item>
  );
};

const Item = (props) => {
  const styles = {
    container: {
      padding: 14,
      paddingHorizontal: 24,
      flexDirection: "row",
      alignItems: "center",

      marginBottom: 2,

      backgroundColor: "white",
    },
  };

  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.container}>{props.children}</View>
    </TouchableWithoutFeedback>
  );
};
