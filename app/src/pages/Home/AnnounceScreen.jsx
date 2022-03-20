import { useState, useEffect } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";

import { getAnnounce, getLogin } from "@/js/api";

import { useLogin } from "@/contexts/LoginContext";

const styles = StyleSheet.create({
  container: { padding: 20 },
});

export default function AnnounceScreen(props) {
  const [login, setLogin] = useLogin();

  const [announce, setAnnounce] = useState([]);

  useEffect(async () => {
    props.navigation.setOptions({ title: "公告页面" });

    try {
      setAnnounce(await getAnnounce());
    } catch (err) {
      alert(err.message);
    }
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Announce title={announce.title}>{announce.context}</Announce>
    </ScrollView>
  );
}

const announceStyles = StyleSheet.create({
  announceContainer: { marginBottom: 20 },
  title: { fontSize: 30, fontWeight: "bold" },
  context: { fontSize: 20 },
});

const Announce = (props) => {
  const styles = announceStyles;
  return (
    <View style={styles.announce}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.context}>{props.children}</Text>
    </View>
  );
};
