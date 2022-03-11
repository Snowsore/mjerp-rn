import React from "react";
import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from "react-native";

import { productInfoList } from "./data";

import dateFormat from "@/js/dateformat";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Infos(props) {
  const params = props.route.params
    ? props.route.params
    : { data: "hellow", title: "单号：22011531/01" };
  const data = params.data;

  React.useEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
      title: params.title,
    });
  }, []);

  const styles = {
    contain: {
      backgroundColor: "#eee",
    },
    infos: {
      padding: 8,
    },
  };

  const productInfoListComps = productInfoList.map((info, index) => (
    <MenuInfo
      key={`info_${index}`}
      onPress={() =>
        props.navigation.push("Info", { pid: "单号：22011531/01", info })
      }
      {...info}
    />
  ));

  return (
    <ScrollView style={styles.contain}>
      <View style={styles.infos}>{productInfoListComps}</View>
    </ScrollView>
  );
}

const MenuInfo = (props) => {
  const worker = props.worker ? props.worker : "";
  const date = props.date ? dateFormat(props.date, "mm/dd HH:MM dddd") : "";
  const type = props.type ? props.type : "";
  const number = props.number ? props.number : "";
  const fail = props.fail ? props.fail : "";
  const machine = props.machine ? props.machine : "";
  const comment = props.comment ? props.comment : "";

  const onPress = () => {
    props.onPress();
  };

  const styles = {
    info: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      marginBottom: 10,
      borderRadius: 10,
      backgroundColor: "#fff",
      padding: 8,
      marginBottom: 8,
      elevation: 4,
    },
    col: {
      flex: 4,
      paddingHorizontal: 10,
    },
    date: { color: "#555" },
    nameRow: {
      height: 24,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    statRow: {
      height: 24,
      alignItems: "center",
      flexDirection: "row",
      flexGrow: 1,
    },
  };

  const Worker = (
    <View style={styles.commentRow}>
      <Text style={styles.worker}>{worker}</Text>
    </View>
  );
  const Date = <Text style={styles.date}>{date}</Text>;
  const Machine = (
    <Badge template="wire">
      <MaterialCommunityIcons name="cogs" size={14} />
      <Text>{machine}</Text>
    </Badge>
  );
  const Number = (
    <Badge template="green">
      <Text>{number}</Text>
    </Badge>
  );
  const Fail = (
    <Badge template="red">
      <Text>{fail}</Text>
    </Badge>
  );
  const Comment = (
    <MaterialCommunityIcons name="clipboard-check-outline" size={26} />
  );

  const isEmpty = (str) => {
    return str.length == 0;
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.info}>
        <Icon>{type}</Icon>
        <View style={styles.col}>
          <View style={styles.nameRow}>
            {Worker}
            {Date}
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.statRow}>
              {!isEmpty(machine) && Machine}
              {!isEmpty(number) && Number}
              {!isEmpty(fail) && Fail}
            </View>
            <View>{!isEmpty(comment) && Comment}</View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const Icon = (props) => {
  const text = props.children;

  const styles = StyleSheet.create({
    container: {
      height: 46,
      flex: 1,
      borderRadius: 4,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#eee",
    },
    text: {
      fontSize: 16,
      fontWeight: "bold",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const Badge = (props) => {
  const styles = StyleSheet.create({
    container: {
      height: 24,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      marginRight: 8,
      paddingHorizontal: 4,
    },
    wire: { borderWidth: 1 },
    green: { backgroundColor: "#8ca" },
    red: { backgroundColor: "#c8a" },
  });

  const color = styles[props.template] ? styles[props.template] : {};

  return (
    <View style={{ ...styles.container, ...color }}>{props.children}</View>
  );
};

const Status = (props) => {
  return (
    <View style={styles.col}>
      <View style={styles.nameRow}>
        {Worker}
        {Date}
      </View>
      <View style={styles.dataRow}>
        {machine != "" && Machine}
        {number != "" && Number}
        {fail != "" && Fail}
        {comment != "" && Comment}
      </View>
    </View>
  );
};
