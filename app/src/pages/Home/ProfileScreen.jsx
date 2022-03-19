import { useEffect } from "react";

import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Label } from "@/components/mj";

import { useLogin } from "@/contexts/LoginContext";

export default function ProfileScreen(props) {
  const [login, setLogin] = useLogin();
  const navigation = props.navigation;

  const icon = login.username ? "account" : "help";
  const name = login.username ? login.username : "未登录";
  const phone = login.username ? `电话: ${login.phone}` : "点击查看登录信息";

  const onPress = () => {
    if (login.username) navigation.push("Login", { screen: "UserScreen" });
    else navigation.push("Login", { screen: "LoginScreen" });
  };

  useEffect(() => {
    props.navigation.setOptions({ title: "个人页面" });
  }, []);

  return (
    <View style={styles.container}>
      <Item onPress={onPress}>
        <Icon name={icon} />
        <View>
          <Label size="xl">{name}</Label>
          <Label>{phone}</Label>
        </View>
      </Item>
      <Item type="navigation" onPress={() => navigation.push("AboutScreen")}>
        <Label>关于</Label>
      </Item>
    </View>
  );
}

const Item = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.stackContainer}>{props.children}</View>
    </TouchableWithoutFeedback>
  );
};

const Icon = (props) => {
  return (
    <View style={styles.icon}>
      <MaterialCommunityIcons name={props.name} size={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  stackContainer: {
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 20,

    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2000,
    borderWidth: 1,
  },
});
