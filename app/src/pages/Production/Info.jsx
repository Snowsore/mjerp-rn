import { useState, useEffect } from "react";
import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TextInput,
  Button,
} from "react-native";

import dateFormat from "@/js/dateformat";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { productInfoList } from "./data";

export default function Info(props) {
  const params = props.route.params
    ? props.route.params
    : { info: productInfoList[0] };
  const worker = params.info.worker;
  const type = params.info.type;
  const date = dateFormat(params.info.date, "yyyy/mm/dd HH:MM dddd");
  const number = params.info.number;
  const fail = params.info.fail;
  const machine = params.info.machine;
  const inspector = params.info.inspector;
  const comment = params.info.comment;

  useEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
      title: `${params.pid} - ${params.info.type}`,
    });
  }, []);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#eee",
      padding: 8,
    },
    session: {
      marginBottom: 8,
      borderRadius: 8,
      borderWidth: 1,
      backgroundColor: "#fff",
    },
    card: {
      height: 60,
      flexDirection: "row",
      alignItems: "center",
    },
    underLine: {
      borderBottomWidth: 1,
    },
  });

  console.log(params.info);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.session}>
        <Item title="生产人" value={worker} />
        <Item title="型号" value={type} noLine />
      </View>
      <View style={styles.session}>
        <Item
          title="生产日期"
          value={date}
          onPress={() => props.navigation.navigate("Worker")}
        />
        <Item
          title="车间编号"
          value={machine}
          onPress={() => props.navigation.navigate("Worker")}
        />
        <Item
          title="生产数量"
          value={number}
          onPress={() => props.navigation.navigate("Worker")}
        />
        <Item
          title="不良数量"
          value={fail}
          onPress={() => props.navigation.navigate("Worker")}
          noLine
        />
      </View>
      {inspector ? (
        <View style={styles.session}>
          <Item title="审批人" value={inspector} />
          <Item
            title="留言"
            value={comment}
            onPress={() => props.navigation.navigate("Worker")}
            noLine
          />
        </View>
      ) : (
        <View>
          <Text>未审批，请审批</Text>
          <Button title="审批" />
        </View>
      )}
    </ScrollView>
  );
}

const Item = (props) => {
  const styles = StyleSheet.create({
    card: {
      height: 60,
      flexDirection: "row",
      alignItems: "center",
    },
    underLine: {
      borderBottomWidth: 1,
    },
  });

  const title = props.title;
  const value = props.value;
  const onPress = props.onPress;
  const underline = props.noLine ? {} : styles.underLine;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.card, underline]}>
        <View style={{ flexGrow: 1 }}>
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 10 }}>{title}</Text>
            <Text style={{ fontSize: 20 }}>{value}</Text>
          </View>
        </View>
        {onPress && <MaterialCommunityIcons name="chevron-right" size={40} />}
      </View>
    </TouchableWithoutFeedback>
  );
};
