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

import { Group } from "@/components/mj";

export default function Info(props) {
  const params = props.route.params;
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
  });

  const baseStats = (
    <Group>
      <Group.Item
        title="型号"
        value={type}
        onPress={() => props.navigation.navigate("Number")}
      ></Group.Item>
    </Group>
  );

  const inspecStats = inspector ? (
    <Group>
      <Group.Item title="审批人" value={inspector} />
      <Group.Item
        title="留言"
        value={comment}
        onPress={() => props.navigation.navigate("Number")}
        noLine
      />
    </Group>
  ) : (
    worker && (
      <View>
        <Text>未审批，请审批</Text>
        <Button
          title="审批"
          onPress={() => props.navigation.navigate("Inspect")}
        />
      </View>
    )
  );

  const onChangeNumber = (value) => {};

  const workStats = worker ? (
    <Group>
      <Group.Item title="生产人" value={worker} />
      <Group.Item
        title="生产日期"
        value={date}
        onPress={() => props.navigation.navigate("Number")}
      />
      <Group.Item
        title="车间编号"
        value={machine}
        onPress={() => props.navigation.navigate("Number")}
      />
      <Group.Item
        title="生产数量"
        value={number}
        onPress={() =>
          props.navigation.navigate("Number", { onChange: onChangeNumber })
        }
      />
      <Group.Item
        title="不良数量"
        value={fail}
        onPress={() => props.navigation.navigate("Number")}
        noLine
      />
    </Group>
  ) : (
    <View>
      <Text>没有生产信息，请添加</Text>
      <Button
        title="添加"
        onPress={() => props.navigation.navigate("Manufacture")}
      />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {baseStats}
      {workStats}
      {inspecStats}
    </ScrollView>
  );
}
