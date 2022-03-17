// MeiJin-Reactnative Input

import { useState, useEffect } from "react";

import { View } from "react-native";

import { Picker } from "@react-native-picker/picker";

import api from "@/js/api";

export default function Input(props) {
  const [optionList, setOptionList] = useState([]);
  const value = props.value;
  const onChange = props.onChange;
  const url = props.url;
  const options = props.options;

  useEffect(() => {
    try {
      if (url) setOptionList(api.getOptions(url));
      if (options) setOptionList(options);
    } catch (err) {
      alert(err.message);
    }
  }, []);

  const optionComps = optionList.map((option) => (
    <Picker.Item
      style={{ fontSize: 24 }}
      key={`item_${option}`}
      label={option}
      value={option}
    />
  ));

  return (
    <Picker selectedValue={value} onValueChange={onChange}>
      {optionComps}
    </Picker>
  );
}
