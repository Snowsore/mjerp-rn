import { useState, useEffect } from "react";
import { Text, View } from "react-native";

import { Loading } from "@components";

import { getAnnounces } from "@js/api";

export default AnnounceScreen = (props) => {
  useEffect(async () => {
    props.navigation.setOptions({ title: "公告" });
  }, []);

  const styles = {
    container: { padding: 20 },
  };

  return (
    <View style={styles.container}>
      <Announces />
    </View>
  );
};

const Announces = (props) => {
  const [announces, setAnnounces] = useState([]);

  useEffect(async () => {
    try {
      setAnnounces(await getAnnounces());
    } catch (err) {
      alert(err.message);
    }
  }, []);

  if (!announces.length) return <Loading />;

  return announces.map((announce, index) => (
    <Announce key={`announce_${index}`} title={announce.title}>
      {announce.context}
    </Announce>
  ));
};

const Announce = (props) => {
  const styles = {
    announceContainer: { marginBottom: 20 },
    title: { fontSize: 30, fontWeight: "bold" },
    context: { fontSize: 20 },
  };

  return (
    <View style={styles.announce}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.context}>{props.children}</Text>
    </View>
  );
};
