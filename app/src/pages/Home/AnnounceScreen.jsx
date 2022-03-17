import { useState, useEffect } from "react";
import { Text, View, Button, ScrollView } from "react-native";

import api from "@/js/api";

import { useLogin } from "@/contexts/LoginContext";

export default function AnnounceScreen(props) {
  const [login, setLogin] = useLogin();

  const [announceList, setAnnounceList] = useState([]);

  useEffect(async () => {
    try {
      const login = await api.getLogin();
      if (login) setLogin(login);
    } catch (err) {}

    try {
      setAnnounceList(await api.getAnnounce());
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

  return <ScrollView style={{ padding: 8 }}>{AnnounceComps}</ScrollView>;
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
