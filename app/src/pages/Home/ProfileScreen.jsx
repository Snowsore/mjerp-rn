import { useEffect } from "react";

import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Switch,
  TouchableWithoutFeedback,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { useLogin } from "@/contexts/LoginContext";

export default function ProfileScreen(props) {
  const [login, setLogin] = useLogin();
  const navigation = props.navigation;

  const { username, phone, uid } = login;

  const nameString = username ? username : "未登录";
  const phoneString = username ? `电话: ${phone}` : "点击查看登录信息";
  const icon = (
    <MaterialCommunityIcons name={username ? "account" : `help`} size={30} />
  );
  const onPress = () => {
    if (!username) navigation.push("Login", { screen: "LoginScreen" });
    else navigation.push("Login", { screen: "UserScreen" });
  };

  useEffect(() => {
    props.navigation.setOptions({ title: "个人页面" });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Stack
        icon={<View style={styles.loginIcon}>{icon}</View>}
        type="navigate"
        onPress={onPress}
      >
        <View>
          <Text style={styles.loginName}>{nameString}</Text>
          <Text>{phoneString}</Text>
        </View>
      </Stack>
      {/* <Stack
        icon={
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="home" size={30} />
          </View>
        }
        type="switch"
      >
        <Text>开关</Text>
      </Stack> */}
      <Divider />
      <Stack
        icon={
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="exclamation" size={30} />
          </View>
        }
        type="navigation"
        onPress={() => navigation.push("About")}
      >
        <Text>关于</Text>
      </Stack>
    </ScrollView>
  );
}

function Divider(props) {
  return <View style={styles.divider}></View>;
}

function Stack(props) {
  const getType = (type) => {
    switch (type) {
      case "switch":
        return <Switch />;
      case "navigate":
        return <MaterialCommunityIcons name="chevron-right" size={40} />;
      case "none":
        return <></>;
    }
  };

  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.stackContainer}>
        <View style={styles.stackIcon}>{props.icon}</View>
        <Text style={styles.stackContext}>{props.children}</Text>
        <View style={styles.stackHandler}>{getType(props.type)}</View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {},
  loginIcon: {
    width: 60,
    height: 60,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    borderWidth: 2,
  },
  loginName: { fontSize: 20 },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    padding: 4,
    backgroundColor: "#ccc",
    borderRadius: 50,
  },
  stackContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  stackIcon: {
    alignItems: "center",
    width: 80,
    paddingVertical: 8,
    marginLeft: 8,
  },
  stackContext: { flexGrow: 1 },
  stackHandler: { marginRight: 8, width: 40, alignItems: "center" },
  divider: { padding: 4, backgroundColor: "#ccc" },
});
