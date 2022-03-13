import { useState, useEffect } from "react";
import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from "react-native";

import dateFormat from "@/js/dateformat";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import api from "@/js/api";

export default function Infos(props) {
  const [infos, setInfos] = useState([]);

  const params = props.route.params;
  const pid = params ? params.pid : "2201153101";

  useEffect(async () => {
    const infos = await api.getProductInfos(pid);
    setInfos(infos);

    props.navigation.setOptions({
      title: `单号：${pid}`,
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

  const productInfoListComps = infos.map((info, index) => (
    <MenuInfo
      key={`info_${index}`}
      onPress={() =>
        props.navigation.push("Info", { pid, index, info: infos[index] })
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

  const workerComp = <Text>{worker}</Text>;
  const dateComp = <Text style={styles.date}>{date}</Text>;
  const machineComp = <Badge template="gray">{machine}</Badge>;
  const numberComp = <Badge template="green">{number}</Badge>;
  const failComp = <Badge template="red">{fail}</Badge>;
  const commentComp = (
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
            {workerComp}
            {dateComp}
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.statRow}>
              {!isEmpty(machine) && machineComp}
              {!isEmpty(number) && numberComp}
              {!isEmpty(fail) && failComp}
            </View>
            <View>{!isEmpty(comment) && commentComp}</View>
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
      textAlign: "center",
    },
    wire: { borderWidth: 1 },
    gray: { backgroundColor: "#ccc" },
    green: { backgroundColor: "#8ca" },
    red: { backgroundColor: "#c8a" },
  });

  const color = styles[props.template] ? styles[props.template] : {};

  return (
    <View style={{ ...styles.container, ...color }}>
      <Text>{props.children}</Text>
    </View>
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
