import { Text, StyleSheet, View, TouchableWithoutFeedback } from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Group = (props) => {
  const styles = StyleSheet.create({
    session: {
      padding: 8,
      marginBottom: 8,
      borderRadius: 8,
      borderWidth: 1,
      backgroundColor: "#fff",
    },
    underline: {
      borderBottomWidth: 1,
    },
  });

  const childrens = Array.isArray(props.children)
    ? props.children
    : [props.children];

  const listComps = childrens.map((comp, index) => {
    const underline = index == childrens.length - 1 ? "" : styles.underline;
    return (
      <View key={`group_${index}`} style={underline}>
        {comp}
      </View>
    );
  });

  return <View style={styles.session}>{listComps}</View>;
};

Group.Item = (props) => {
  const title = props.title;
  const value = props.value;
  const onPress = props.onPress;

  const styles = StyleSheet.create({
    card: {
      marginHorizontal: 8,
      marginVertical: 4,
      flexDirection: "row",
      alignItems: "center",
    },
    content: {
      flexGrow: 1,
    },
  });

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.content}>
          {title != undefined && <Text style={{ fontSize: 10 }}>{title}</Text>}
          {value != undefined && <Text style={{ fontSize: 20 }}>{value}</Text>}
          {props.children}
        </View>
        {onPress && (
          <View style={{ width: 30 }}>
            <MaterialCommunityIcons name="chevron-right" size={40} />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

Group.Link = (props) => {
  const title = props.title ? props.title : null;
  const onPress = props.onPress;

  const styles = StyleSheet.create({
    card: {
      marginHorizontal: 8,
      marginVertical: 4,
      flexDirection: "row",
      alignItems: "center",
    },
  });

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View style={{ flexGrow: 1 }}>
          <Text style={{ fontSize: 20 }}>{title}</Text>
        </View>
        <View style={{ width: 30 }}>
          <MaterialCommunityIcons name="chevron-right" size={40} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Group;
