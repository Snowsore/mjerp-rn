import { useState, useEffect } from "react";
import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { Input, Button, Flex, Field, Picker } from "@/components/mj";

import api from "@/js/api";

export default function Manufacture(props) {
  const [type, setType] = useState("");
  const [number, setNumber] = useState(0);
  const [fail, setFail] = useState(0);

  const info = props.route.params.info;
  const id = info.id;
  const step = info.step;

  useEffect(() => {
    props.navigation.setOptions({
      title: "生产计划",
    });
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      padding: 36,
    },
  });

  const post = async () => {
    try {
      await api.postProductInfo(id, step, { type, number, fail });
      alert("更新成功");
      props.navigation.replace("Infos", { pid: info.id });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Flex gap={8}>
        <Field title="机器型号">
          <Picker options={["1", "2", "3"]} value={type} onChange={setType} />
        </Field>
        <Flex row gap={8}>
          <Field style={{ flex: 1 }} title="数量">
            <Input value={number} onChange={setNumber} type="number" />
          </Field>
          <Field style={{ flex: 1 }} title="不良">
            <Input value={fail} onChange={setFail} type="number" />
          </Field>
        </Flex>
        <Button template="green" title="确认" onPress={post} />
      </Flex>
    </View>
  );
}
