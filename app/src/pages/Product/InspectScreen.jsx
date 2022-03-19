import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import { Input, Button, Flex, Field } from "@/components/mj";

import { postProductInfo } from "@/js/api";

export default function InspectScreen(props) {
  const [comment, setComment] = useState("");

  const params = props.route.params;
  const info = params.info;
  const id = info.id;
  const step = info.step;

  useEffect(() => {
    props.navigation.setOptions({
      title: "质检",
    });
  }, []);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      padding: 36,
      flex: 1,
    },
  });

  const post = async () => {
    try {
      await postProductInfo(id, step, { comment });
      alert("更新成功");
      props.navigation.replace("Infos", { pid: info.id });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Flex gap={8}>
        <Field title="备注">
          <Input value={comment} onChange={setComment} />
        </Field>
        <Button template="green" title="确认" onPress={post} />
      </Flex>
    </View>
  );
}
