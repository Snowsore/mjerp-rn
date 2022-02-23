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
      paddingVertical: 8,
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
  const date = props.date
    ? dateFormat(props.date, "yyyy/mm/dd HH:MM dddd")
    : "";
  const type = props.type ? props.type : "";
  const number = props.number ? props.number : "";
  const fail = props.fail ? props.fail : "";
  const machine = props.machine ? props.machine : "";
  const inspector = props.inspector ? props.inspector : "";
  const comment = props.comment ? props.comment : "";

  const onPress = () => {
    props.onPress();
  };

  const styles = {
    info: {
      flexDirection: "row",
      marginBottom: 10,
      borderRadius: 10,
      backgroundColor: "#fff",
      paddingHorizontal: 8,
      paddingVertical: 12,
      marginHorizontal: 8,
      marginBottom: 8,
    },
    icon: {
      marginRight: 4,
    },
    type: {},
    typeCircle: {
      width: 80,
      height: 80,
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#eee",
    },
    col: {
      paddingHorizontal: 10,
      flexGrow: 1,
    },
    worker: {},
    date: { color: "#555" },
    type: {
      fontSize: 22,
      fontWeight: "bold",
    },
    number: {
      textAlign: "center",
      width: 40,
      borderRadius: 10,
      padding: 2,
      backgroundColor: "#8ca",
      marginRight: 8,
    },
    fail: {
      textAlign: "center",
      width: 40,
      borderRadius: 10,
      padding: 2,
      backgroundColor: "#c8a",
      marginRight: 8,
    },
    machine: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 8,
      borderWidth: 1,
      marginRight: 8,
    },
    machineText: { marginLeft: 4 },
    nameRow: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    dataRow: {
      paddingVertical: 8,
      alignItems: "center",
      flexDirection: "row",
    },
    commentRow: {
      borderRadius: 8,
      flexDirection: "row",
      alignItems: "center",
    },
    inspector: { paddingHorizontal: 4 },
    comment: {},
  };

  const Worker = (
    <View style={styles.commentRow}>
      <Text style={styles.worker}>{worker}</Text>
    </View>
  );
  const Date = <Text style={styles.date}>{date}</Text>;
  const Machine = (
    <View style={styles.machine}>
      <MaterialCommunityIcons name="cogs" size={14} />
      <Text style={styles.machineText}>{machine}</Text>
    </View>
  );
  const Number = <Text style={styles.number}>{number}</Text>;
  const Fail = <Text style={styles.fail}>{fail}</Text>;
  const Comment = (
    <View style={styles.commentRow}>
      <MaterialCommunityIcons name="clipboard-check-outline" size={18} />
      <Text style={styles.inspector}>{inspector}</Text>
      <Text style={styles.comment}>{comment}</Text>
    </View>
  );

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View>
        <View style={styles.info}>
          <View style={styles.type}>
            <View style={styles.typeCircle}>
              <Text style={styles.type}>{type}</Text>
            </View>
          </View>
          <View style={styles.col}>
            <View style={styles.nameRow}>
              {Worker}
              {Date}
            </View>
            <View style={styles.dataRow}>
              {machine != "" && Machine}
              {number != "" && Number}
              {fail != "" && Fail}
            </View>
            {comment != "" && Comment}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
