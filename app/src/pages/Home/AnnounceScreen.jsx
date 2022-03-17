import { useState, useEffect } from "react";
import { Text, View, Button, ScrollView } from "react-native";

import { getAnnounce, getLogin, famek } from "@/js/api";

import { useLogin } from "@/contexts/LoginContext";

export default function AnnounceScreen(props) {
  const [login, setLogin] = useLogin();

  const [announceList, setAnnounceList] = useState([]);

  useEffect(async () => {
    props.navigation.setOptions({ title: "公告页面" });

    try {
      setLogin(await getLogin());
    } catch (err) {}

    try {
      setAnnounceList(await getAnnounce());
    } catch (err) {
      alert(err.message);
    }
  }, []);

  const AnnounceComps = announceList.map((announce, index) => (
    <Announce key={`announce_${index}`}>
      <Announce.Title>{announce.title}</Announce.Title>
      <Announce.Context>{announce.context}</Announce.Context>
    </Announce>
  ));

  return (
    <ScrollView style={{ backgroundColor: "#E1E6E1", padding: 8 }}>
      {AnnounceComps}
    </ScrollView>
  );
}

const Announce = ({ children }) => {
  return <View style={{ padding: 8, borderBottomWidth: 1 }}>{children}</View>;
};

Announce.Title = ({ children }) => {
  return <Text style={{ fontSize: 30, fontWeight: "bold" }}>{children}</Text>;
};

Announce.Context = ({ children }) => {
  return <Text style={{ fontSize: 20 }}>{children}</Text>;
};
