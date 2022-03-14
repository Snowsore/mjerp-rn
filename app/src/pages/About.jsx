import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Switch,
  TouchableWithoutFeedback,
} from "react-native";

export default function About(props) {
  const styles = StyleSheet.create({
    frame: {
      backgroundColor: "#eee",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "monospace",
    },
  });

  const fontFamily = {
    fontFamily: "monospace",
  };

  return (
    <View style={styles.frame}>
      <Text style={[{ fontSize: 30 }, fontFamily]}>MeiJinERP</Text>
      <Text style={[{ color: "#ccc" }, fontFamily]}>Created By Snowsore</Text>
      <Text style={[fontFamily]}>HeFeiMeiJin ㋏ 2022</Text>
    </View>
  );
}
