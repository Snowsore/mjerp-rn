// Frame for app

import React from "react";
import { View } from "react-native";

function Frame(props) {
  return <View style={styles.container}>{props.children}</View>;
}

const styles = {
  container: { backgroundColor: "#eee", padding: 8 },
};

export default Frame;
