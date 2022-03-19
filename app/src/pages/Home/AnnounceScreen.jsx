import { useState, useEffect } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";

import { getAnnounce, getLogin } from "@/js/api";

import { useLogin } from "@/contexts/LoginContext";

export default function AnnounceScreen(props) {
  const [login, setLogin] = useLogin();

  const [announce, setAnnounce] = useState([]);

  useEffect(async () => {
    props.navigation.setOptions({ title: "公告页面" });

    props.navigation.push("Product", {
      screen: "InfosScreen",
      params: { pid: "2201153101" },
    });

    try {
      setLogin(await getLogin());
    } catch (err) {}

    try {
      setAnnounce(await getAnnounce());
    } catch (err) {
      alert(err.message);
    }
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Announce>
        <Title>{announce.title}</Title>
        <Context>{announce.context}</Context>
      </Announce>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  announce: {
    marginBottom: 20,
  },
  title: { fontSize: 30, fontWeight: "bold" },
  context: { fontSize: 20 },
});

const Announce = ({ children }) => {
  return <View style={styles.announce}>{children}</View>;
};

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const Context = ({ children }) => {
  return <Text style={styles.context}>{children}</Text>;
};
