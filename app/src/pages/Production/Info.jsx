import React from "react";
import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from "react-native";

import dateFormat from "@/js/dateformat";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Info(props) {
  const params = props.route.params;
  React.useEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
      title: `${params.pid} - ${params.info.type}`,
    });
  }, []);

  const styles = StyleSheet.create({});

  return (
    <ScrollView style={styles.contain}>
      <Text>{JSON.stringify(params.info)}</Text>
    </ScrollView>
  );
}
