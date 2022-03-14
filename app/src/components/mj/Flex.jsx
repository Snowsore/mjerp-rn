// Custom flex

import {} from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function Frame(props) {
  const styles = StyleSheet.create({
    container: {},
    row: {
      flexDirection: "row",
    },
    col: {},
    gap: {
      marginBottom: props.gap,
    },
  });

  const direction = props.row ? styles.row : styles.col;
  const marginDirection = props.row ? "marginRight" : "marginBottom";
  const directionMargin = { [marginDirection]: props.gap };

  const childrens = Array.isArray(props.children)
    ? props.children
    : [props.children];

  const childrenComp = childrens.map((children, index) => {
    const gap = index == childrens.length - 1 ? "" : directionMargin;
    const style = children.props.style
      ? { ...children.props.style, ...gap }
      : { ...gap };
    return (
      <View key={`flex_${index}`} style={style}>
        {children}
      </View>
    );
  });

  return <View style={[styles.container, direction]}>{childrenComp}</View>;
}

export default Frame;
