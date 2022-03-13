import { useState, useEffect } from "react";
import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function Form(props) {
  useEffect(() => {
    props.navigation.setOptions({
      title: `Oyaji`,
    });
  }, []);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#eee",
      padding: 8,
    },
  });

  return (
    <ScrollView style={styles.container}>
      <Text>Good</Text>
    </ScrollView>
  );
}
