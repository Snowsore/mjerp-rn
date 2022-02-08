import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, ScrollView } from "react-native";

import api from "@/api";

export default function AnnounceScreen(props) {
  const [announceList, setAnnounceList] = React.useState([]);

  React.useEffect(() => {
    api.getAnnounce().then((list) => {
      setAnnounceList(list);
    });
  }, []);

  return (
    <ScrollView>
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
  return <View style={styles.announceContainer}>{children}</View>;
}

function Title({ children }) {
  return <Text>{children}</Text>;
}

function Context({ children }) {
  return <Text>{children}</Text>;
}

Announce.Title = Title;
Announce.Context = Context;

const styles = StyleSheet.create({
  announceContainer: {
    margin: 2,
    borderWidth: 2,
  },
});
