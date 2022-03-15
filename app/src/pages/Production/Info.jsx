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
      title: `${params.pid} - ${info.type}`,
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
      <Group.Item title="型号" value={type}></Group.Item>
    </Group>
  );

  const inspecStats = (
    <Ifdiv value={inspector}>
      <Ifdiv.True>
        <Group>
          <Group.Item title="审批人" value={inspector} />
          <Group.Item
            title="留言"
            value={comment}
            onPress={() => props.navigation.navigate("Number")}
            noLine
          />
        </Group>
      </Ifdiv.True>
      <Ifdiv.False>
        <Ifdiv value={worker}>
          <Ifdiv.True>
            <View>
              <Text>未审批，请审批</Text>
              <Button
                title="审批"
                onPress={() => props.navigation.navigate("Inspect")}
              />
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
              props.navigation.navigate("NumberInput", {
                title: "number",
                value: number,
              })
            }
          />
          <StatItem title="不良数量" value={fail} type="NumberInput" noLine />
        </Group>
      </Ifdiv.True>
      <Ifdiv.False>
        <View>
          <Text>没有生产信息，请添加</Text>
          <Button
            title="添加"
            onPress={() => props.navigation.navigate("Manufacture")}
          />
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

const StatItem = (props) => {
  const title = props.title;
  const value = props.value;
  const type = props.type;
  const noLine = props.noLine;
  const onPress = () => props.navigation.navigate(type, { title, value });
  return <Group.Item title={title} value={number} onPress={onPress} noLine />;
};
