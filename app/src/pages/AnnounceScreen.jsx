import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { useTailwind } from "tailwind-rn";

import api from "@/api";

export default function AnnounceScreen(props) {
  const tailwind = useTailwind();
  const [announceList, setAnnounceList] = React.useState([]);

  api.getAnnounce().then((list) => {
    setAnnounceList(list);
  });

  return (
    <View style={tailwind("flex flex-col gap-4")}>
      {announceList.map((announce) => (
        <Announce>
          <Announce.Title>{announce.title}</Announce.Title>
          <Announce.Context>{announce.context}</Announce.Context>
        </Announce>
      ))}
    </View>
  );
}

function Announce({ children }) {
  return <View>{children}</View>;
}

function Title({ children }) {
  return <Text>{children}</Text>;
}

function Context({ children }) {
  return <Text>{children}</Text>;
}

Announce.Title = Title;
Announce.Context = Context;
