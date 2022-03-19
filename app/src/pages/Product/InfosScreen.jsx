import { useEffect } from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";

import { Label } from "@/components/mj";

import dateFormat from "@/js/dateformat";
import { getProductInfos } from "@/js/api";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { useProduct } from "@/contexts/ProductContext";

export default function InfosScreen(props) {
  const [product, setProduct] = useProduct();

  useEffect(async () => {
    try {
      const id = props.route.params.pid;
      setProduct(await getProductInfos(id));

      props.navigation.setOptions({
        title: `单号：${id}`,
      });
    } catch (err) {
      alert(err.message);
      props.navigation.goBack();
    }
  }, []);

  const productInfoListComps = product.map((info, step) => (
    <MenuInfo
      key={`info_${step}`}
      onPress={() => props.navigation.push("InfoScreen", { step })}
      info={info}
    />
  ));

  return <View style={styles.container}>{productInfoListComps}</View>;
}

const MenuInfo = (props) => {
  const info = props.info;

  const date = dateFormat(info.date, "mm/dd HH:MM dddd");

  const workerComp = <Text>{info.worker}</Text>;
  const dateComp = <Text style={styles.date}>{date}</Text>;
  const machineComp = <Badge template="gray">{info.machine}</Badge>;
  const numberComp = <Badge template="green">{info.number}</Badge>;
  const failComp = <Badge template="red">{info.fail}</Badge>;
  const inspectorComp = (
    <View style={styles.inspector}>
      <MaterialCommunityIcons name="clipboard-check-outline" size={20} />
    </View>
  );

  const productionStats = (
    <View style={styles.productionStats}>
      {machineComp}
      {numberComp}
      {failComp}
    </View>
  );

  const workerLine = (
    <View style={styles.workerLine}>
      {info.worker != "" && (
        <>
          {workerComp}
          {dateComp}
        </>
      )}
    </View>
  );

  const statLine = (
    <View style={styles.statLine}>
      {info.worker != "" && productionStats}
      {info.inspector != "" && inspectorComp}
    </View>
  );

  const typeComp = (
    <View style={styles.typeIcon}>
      <Label bold>{info.type}</Label>
    </View>
  );

  const statComp = (
    <View style={styles.statComp}>
      {workerLine}
      {statLine}
    </View>
  );

  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.card}>
        {typeComp}
        {statComp}
      </View>
    </TouchableWithoutFeedback>
  );
};

const Badge = (props) => {
  const styles = StyleSheet.create({
    container: {
      width: 50,
      marginRight: 8,
    },
    text: {
      textAlign: "center",
    },
    gray: { backgroundColor: "#ccc" },
    green: { backgroundColor: "#8ca" },
    red: { backgroundColor: "#c8a" },
  });

  const color = styles[props.template] ? styles[props.template] : {};

  return (
    <View style={[styles.container, color]}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 8,
    elevation: 4,
    marginHorizontal: 8,
    marginTop: 8,
  },
  typeIcon: {
    flex: 1,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
  },
  statComp: {
    marginLeft: 8,
    flex: 4,
  },
  date: { color: "#555" },
  workerLine: {
    marginBottom: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statLine: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productionStats: {
    flexDirection: "row",
  },
  stateLine: {
    flexDirection: "row",
  },
  inspector: { width: 18, height: 18 },
});
