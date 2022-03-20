import { Text, StyleSheet, TouchableOpacity } from "react-native";

import { navigation } from "@refs/RootNavigation";

const Link = (props) => {
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 14,
    },
  });

  const onPress = () => {
    navigation.navigate(props.to);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {props.children}
    </TouchableOpacity>
  );
};

export default Link;
