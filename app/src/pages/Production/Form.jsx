import { useState, useEffect } from "react";
import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { Picker } from "@react-native-picker/picker";

import { Group, Input, Button, Flex, Field } from "@/components/mj";

import api from "@/js/api";

export default function Form(props) {
  const [type, setType] = useState("");
  const [number, setNumber] = useState(0);
  const [fail, setFail] = useState(0);

  useEffect(() => {
    props.navigation.setOptions({
      title: "生产计划",
    });
  }, []);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      padding: 36,
    },
  });

  const post = () => {
    api.postProduct({
      type,
      number,
      fail,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Flex gap={8}>
        <View style={{ flex: 4 }}>
          <Field title="机器型号">
            <Picker selectedValue={type} onValueChange={setType}>
              <Picker.Item label="A" value="a" />
              <Picker.Item label="B" value="b" />
              <Picker.Item label="C" value="c" />
              <Picker.Item label="D" value="d" />
              <Picker.Item label="A" value="a" />
              <Picker.Item label="B" value="b" />
              <Picker.Item label="C" value="c" />
              <Picker.Item label="D" value="d" />
              <Picker.Item label="A" value="a" />
              <Picker.Item label="B" value="b" />
              <Picker.Item label="C" value="c" />
              <Picker.Item label="D" value="d" />
              <Picker.Item label="A" value="a" />
              <Picker.Item label="B" value="b" />
              <Picker.Item label="C" value="c" />
              <Picker.Item label="D" value="d" />
            </Picker>
          </Field>
        </View>
        <Flex row gap={8}>
          <View style={{ flex: 1 }}>
            <Field title="数量">
              <Input value={number} onChange={setNumber} type="number" />
            </Field>
          </View>
          <View style={{ flex: 1 }}>
            <Field title="不良">
              <Input value={fail} onChange={setFail} type="number" />
            </Field>
          </View>
        </Flex>
        <Button template="green" title="确认" onPress={post} />
      </Flex>
    </ScrollView>
  );
}
