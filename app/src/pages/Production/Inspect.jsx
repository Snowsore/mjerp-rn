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

export default function Inspect(props) {
  const [comment, setComment] = useState("");

  useEffect(() => {
    props.navigation.setOptions({
      title: "质检",
    });
  }, []);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      padding: 36,
    },
  });

  const post = async () => {
    const res = await api.postInspect(1010, 1, {
      comment,
    });
    alert(res.msg);
    props.navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Flex gap={8}>
        <Field title="备注">
          <Input value={comment} onChange={setComment} />
        </Field>
        <Button template="green" title="确认" onPress={post} />
      </Flex>
    </ScrollView>
  );
}
