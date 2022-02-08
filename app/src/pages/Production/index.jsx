import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Input, Button } from "@/components/Basic";

export default function Production(props) {
  const params = props.route.params
    ? props.route.params
    : { data: "hellow", title: "生产计划：XYZ0203" };
  const data = params.data;

  React.useEffect(() => {
    props.navigation.setOptions({ title: params.title });
  }, []);

  return <ProductForm />;
}

function ProductForm(props) {
  return (
    <View style={styles.container}>
      <Input placeholder="王小明" title="Name" />
      <Input placeholder="" title="Email" />
      <Input type="number" placeholder="XXX-XXXX-XXXX" title="Number" />
      <Input type="number" title="Error" />
      <Button style={styles.submitButton} title="Submit" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    padding: 10,
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  textInput: {
    borderWidth: 2,
    margin: 4,
  },
  submitButtonContainer: { bottom: 0 },
});
