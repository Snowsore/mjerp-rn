import { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Text,
  View,
  ScrollView,
  StyleSheet,
} from "react-native";

import { getAnnounces, getLogin } from "@/js/api";

import { useLogin } from "@/contexts/LoginContext";

export default function AnnounceScreen(props) {
  const [login, setLogin] = useLogin();

  const [announces, setAnnounces] = useState([]);

  useEffect(async () => {
    props.navigation.setOptions({ title: "公告" });

    try {
      setAnnounces(await getAnnounces());
    } catch (err) {
      alert(err.message);
    }
  }, []);

  const announceComp = () => {
    if (announces.length) {
      return announces.map((announce, index) => (
        <Announce key={`announce_${index}`} title={announce.title}>
          {announce.context}
        </Announce>
      ));
    }
    return <ActivityIndicator size="large" color="#E3170A" />;
  };

  return <ScrollView style={styles.container}>{announceComp()}</ScrollView>;
}

const styles = StyleSheet.create({
  container: { padding: 20 },
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

const announceStyles = StyleSheet.create({
  announceContainer: { marginBottom: 20 },
  title: { fontSize: 30, fontWeight: "bold" },
  context: { fontSize: 20 },
});
