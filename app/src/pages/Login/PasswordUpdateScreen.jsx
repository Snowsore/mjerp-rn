import { useEffect, useState } from "react";

import { View } from "react-native";

import { Input, Field, Flex, Button } from "@/components/mj";

import { useLogin } from "@/contexts/LoginContext";

export default function NameUpdateScreen(props) {
  const [login, setLogin] = useLogin();
  const [password, setPassword] = useState(login.password);

  useEffect(() => {
    props.navigation.setOptions({
      title: "密码设置",
    });
  }, []);

  const onPress = async () => {
    await api.postLogin({
      password,
    });
  };

  return (
    <View style={{ padding: 30 }}>
      <Flex gap={8}>
        <Field title="密码">
          <Input value={password} onChange={setPassword} />
        </Field>
        <Button title="修改" onPress={onPress} />
      </Flex>
    </View>
  );
}
