import { useState, useEffect } from "react";
import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { Group } from "@/components/mj";

export default function Worker(props) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#eee",
      padding: 8,
    },
  });

  return (
    <ScrollView style={styles.container}>
      <Group>
        <Group.Item>
          <Text>Good</Text>
        </Group.Item>
      </Group>
    </ScrollView>
  );
}
