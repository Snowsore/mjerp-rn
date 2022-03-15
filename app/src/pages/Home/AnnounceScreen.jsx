import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, ScrollView } from "react-native";

import api from "@/js/api";

import { useLogin } from "@/contexts/LoginContext";

export default function AnnounceScreen(props) {
  const [login, setLogin] = useLogin();

  const [announceList, setAnnounceList] = useState([]);

  useEffect(async () => {
    try {
      setAnnounceList(await api.getAnnounce());
    } catch (err) {
      alert(err.message);
    }
  }, []);

  return (
    <ScrollView style={{ padding: 8 }}>
      {announceList.map((announce, index) => (
        <Announce key={`announce_${index}`}>
          <Announce.Title>{announce.title}</Announce.Title>
          <Announce.Context>{announce.context}</Announce.Context>
        </Announce>
      ))}
    </ScrollView>
  );
}

function Announce({ children }) {
  return <View style={{ padding: 8, borderBottomWidth: 1 }}>{children}</View>;
}

function Title({ children }) {
  return <Text style={{ fontSize: 30, fontWeight: "bold" }}>{children}</Text>;
}

function Context({ children }) {
  return <Text style={{ fontSize: 20 }}>{children}</Text>;
}

Announce.Title = Title;
Announce.Context = Context;
