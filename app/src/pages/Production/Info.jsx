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

import { Ifdiv } from "@/components/mj";

import dateFormat from "@/js/dateformat";

import { Group } from "@/components/mj";

export default function Info(props) {
  const info = props.route.params.info;
  const id = info.id;
  const worker = info.worker;
  const type = info.type;
  const date = dateFormat(info.date, "yyyy/mm/dd HH:MM dddd");
  const number = info.number;
  const fail = info.fail;
  const machine = info.machine;
  const inspector = info.inspector;
  const comment = info.comment;

  useEffect(() => {
    props.navigation.setOptions({
      title: `${id} - ${type}`,
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

  const onPressInput = (title, field) => {
    return () => {
      props.navigation.navigate("PostInfo", { title, field, info });
    };
  };

  const onPressDate = onPressInput("生产日期", "date");
  const onPressMach = onPressInput("车间编号", "machine");
  const onPressNumber = onPressInput("生产数量", "number");
  const onPressFail = onPressInput("不良数量", "fail");
  const onPressComment = onPressInput("留言", "comment");

  const onPressInspect = () => props.navigation.navigate("Inspect", { info });
  const onPressMenufac = () =>
    props.navigation.navigate("Manufacture", { info });

  const baseStats = (
    <Group>
      <Group.Item title="型号" value={type}></Group.Item>
    </Group>
  );

  const inspecStats = (
    <Ifdiv value={inspector}>
      <Ifdiv.True>
        <Group>
          <Group.Item title="审批人" value={inspector} />
          <Group.Item title="留言" value={comment} onPress={onPressComment} />
        </Group>
      </Ifdiv.True>
      <Ifdiv.False>
        <Ifdiv value={worker}>
          <Ifdiv.True>
            <View>
              <Text>未审批，请审批</Text>
              <Button title="审批" onPress={onPressInspect} />
            </View>
          </Ifdiv.True>
        </Ifdiv>
      </Ifdiv.False>
    </Ifdiv>
  );

  const workStats = (
    <Ifdiv value={worker}>
      <Ifdiv.True>
        <Group>
          <Group.Item title="生产人" value={worker} />
          <Group.Item title="生产日期" value={date} onPress={onPressDate} />
          <Group.Item title="车间编号" value={machine} onPress={onPressMach} />
          <Group.Item title="生产数量" value={number} onPress={onPressNumber} />
          <Group.Item title="不良数量" value={fail} onPress={onPressFail} />
        </Group>
      </Ifdiv.True>
      <Ifdiv.False>
        <View>
          <Text>没有生产信息，请添加</Text>
          <Button title="添加" onPress={onPressMenufac} />
        </View>
      </Ifdiv.False>
    </Ifdiv>
  );

  return (
    <ScrollView style={styles.container}>
      {baseStats}
      {workStats}
      {inspecStats}
    </ScrollView>
  );
}
