import React from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

import dateFormat from "dateformat";

export default function Production(props) {
  const params = props.route.params
    ? props.route.params
    : { data: "hellow", title: "单号：22011531/01" };
  const data = params.data;

  React.useEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
      title: params.title,
    });
  }, []);

  return <ProductForm />;
}

function ProductForm(props) {
  const ProductInfoList = [
    {
      worker: "刘强东",
      date: Date.now(),
      type: "A",
      number: 210,
      fail: 10,
      machine: "A01",
      inspector: "华强",
      comment: "这是测试",
    },
    {
      type: "SZ1",
    },
    {},
    {
      type: "D",
    },
    {
      type: "ZC9.1",
    },
    {
      type: "Q5",
    },
    {
      type: "W",
    },
  ];

  const productInfoList = ProductInfoList.map((info, index) => (
    <MenuInfo key={`info_${index}`} {...info} />
  ));

  return (
    <ScrollView
      style={{
        backgroundColor: "#fff",
        paddingHorizontal: 10,
      }}
    >
      <MenuHeader />
      {productInfoList}
    </ScrollView>
  );
}

const MenuHeader = (props) => {
  return (
    <View
      style={{
        display: "flex",
        padding: 8,
        marginBottom: 4,
        backgroundColor: "blue",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          borderWidth: 1,
          borderColor: "white",
        }}
      >
        <Text style={styles.info_worker_header}>制造人</Text>
        <Text style={styles.info_date_header}>日期</Text>
        <Text style={styles.info_type_header}>工序</Text>
        <Text style={styles.info_number_header}>数量</Text>
        <Text style={styles.info_fail_header}>不良</Text>
        <Text style={styles.info_machine_header}>机型</Text>
        <Text style={styles.info_inspector_header}>检测员</Text>
      </View>
    </View>
  );
};

const MenuInfo = (props) => {
  const [fold, setFold] = React.useState(false);
  const worker = props.worker ? props.worker : "";
  const date = props.date ? dateFormat(props.date, "mm/dd") : "";
  const type = props.type ? props.type : "";
  const number = props.number ? props.number : "";
  const fail = props.fail ? props.fail : "";
  const machine = props.machine ? props.machine : "";
  const inspector = props.inspector ? props.inspector : "";
  const comment = props.comment ? props.comment : "";

  const onPress = () => {
    setFold(!fold);
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.infoBox}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            borderWidth: 1,
            marginBottom: 4,
          }}
        >
          <Text style={styles.info_worker}>{worker}</Text>
          <Text style={styles.info_date}>{date}</Text>
          <Text style={styles.info_type}>{type}</Text>
          <Text style={styles.info_number}>{number}</Text>
          <Text style={styles.info_fail}>{fail}</Text>
          <Text style={styles.info_machine}>{machine}</Text>
          <Text style={styles.info_inspector}>{inspector}</Text>
        </View>
        {fold && (
          <View>
            {comment != "" && (
              <View
                style={{
                  marginBottom: 4,
                }}
              >
                <Text
                  style={{ paddingLeft: 8, paddingVertical: 4, borderWidth: 1 }}
                >
                  {comment}
                </Text>
              </View>
            )}
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                marginBottom: 4,
              }}
            >
              {}
              <Button
                background="green"
                onPress={() => {
                  alert("go");
                }}
              >
                添加
              </Button>
            </View>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const Button = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{ marginLeft: 8, backgroundColor: props.background }}
    >
      <Text style={{ marginVertical: 4, marginHorizontal: 8, color: "#FFF" }}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 8,
    marginVertical: 8,
  },
  textInput: {
    borderWidth: 2,
    margin: 4,
  },
  submitButtonContainer: { bottom: 0 },
  infoBox: {
    display: "flex",
    padding: 8,
    marginBottom: 4,
    backgroundColor: "#eee",
  },
  info: {},
  info_worker_header: {
    width: 70,
    color: "white",
    borderRightWidth: 1,
    textAlign: "center",
  },
  info_date_header: {
    width: 50,
    color: "white",
    borderRightWidth: 1,
    textAlign: "center",
  },
  info_type_header: {
    width: 40,
    color: "white",
    borderRightWidth: 1,
    textAlign: "center",
  },
  info_number_header: {
    width: 40,
    color: "white",
    borderRightWidth: 1,
    textAlign: "center",
  },
  info_fail_header: {
    width: 40,
    color: "white",
    borderRightWidth: 1,
    textAlign: "center",
  },
  info_machine_header: {
    width: 40,
    color: "white",
    borderRightWidth: 1,
    textAlign: "center",
  },
  info_inspector_header: { width: 70, color: "white", textAlign: "center" },
  info_worker: { width: 70, borderRightWidth: 1, textAlign: "center" },
  info_date: { width: 50, borderRightWidth: 1, textAlign: "center" },
  info_type: { width: 40, borderRightWidth: 1, textAlign: "center" },
  info_number: { width: 40, borderRightWidth: 1, textAlign: "center" },
  info_fail: { width: 40, borderRightWidth: 1, textAlign: "center" },
  info_machine: { width: 40, borderRightWidth: 1, textAlign: "center" },
  info_inspector: { width: 70, textAlign: "center" },
  comment: {},
});
