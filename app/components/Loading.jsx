import { StyleSheet, ActivityIndicator } from "react-native";

const Loading = (props) => {
  const styles = StyleSheet.create({
    container: {
      padding: 40,
    },
  });

  return (
    <ActivityIndicator style={styles.container} size="large" color="#E3170A" />
  );
};

export default Loading;
