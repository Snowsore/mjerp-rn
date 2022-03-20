import { useEffect, useState } from "react";

import { View } from "react-native";

import { Input, Field, Flex, Button } from "@components";

import { useLogin } from "@contexts/LoginContext";

export default function NameUpdateScreen(props) {
  const [login, setLogin] = useLogin();
  const [username, setUsername] = useState(login.username);

  useEffect(() => {
    props.navigation.setOptions({
      title: "姓名设置",
    });
  }, []);

  const onPress = async () => {
    await api.postLogin({
      username,
    });
  };

  return (
    <View style={{ padding: 30 }}>
      <Flex gap={8}>
        <Field title="姓名">
          <Input value={username} onChange={setUsername} />
        </Field>
        <Button title="修改" onPress={onPress} />
      </Flex>
    </View>
  );
}
