import { Text, View } from "react-native";

export default function AboutScreen(props) {
  const styles = {
    frame: {
      backgroundColor: "#eee",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: 30,
      fontFamily: "monospace",
    },
    author: { color: "#ccc", fontFamily: "monospace" },
    inc: {
      fontFamily: "monospace",
    },
  };

  return (
    <View style={styles.frame}>
      <Text style={styles.title}>MeiJinERP</Text>
      <Text style={styles.author}>Created By Snowsore</Text>
      <Text style={styles.inc}>HeFeiMeiJin ㋏ 2022</Text>
    </View>
  );
}
