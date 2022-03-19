import { useState, useEffect } from "react";
import { View, StyleSheet, Button } from "react-native";

import { Input, Flex, Field } from "@/components/mj";

import api from "@/js/api";

export default function PostInfo(props) {
  const [value, setValue] = useState("");

  const params = props.route.params;
  const title = params.title;
  const field = params.field;
  const info = params.info;
  const id = info.id;
  const step = info.step;

  useEffect(() => {
    props.navigation.setOptions({ title });
    setValue(String(info[field]));
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      padding: 36,
    },
  });

  const onPress = async () => {
    try {
      await api.postProductInfoScreen(id, step, { [field]: value });
      alert("更新成功");
      props.navigation.replace("Infos", { pid: info.id });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Flex gap={8}>
        <Field title={title}>
          <Input value={value} onChange={setValue} type={typeof info[field]} />
        </Field>
        <Button template="green" title="确认" onPress={onPress} />
      </Flex>
    </View>
  );
}
