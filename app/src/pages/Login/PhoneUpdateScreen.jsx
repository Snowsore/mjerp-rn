import { useEffect, useState } from "react";

import { View } from "react-native";

import { Input, Field, Flex, Button } from "@/components/mj";

import { useLogin } from "@/contexts/LoginContext";

export default function NameUpdateScreen(props) {
  const [login, setLogin] = useLogin();
  const [phone, setPhone] = useState(login.phone);

  useEffect(() => {
    props.navigation.setOptions({
      title: "手机号设置",
    });
  }, []);

  const onPress = async () => {
    await api.postLogin({
      phone,
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: 30 }}>
      <Flex gap={8}>
        <Field title="手机号">
          <Input value={phone} onChange={setPhone} />
        </Field>
        <Button title="修改" onPress={onPress} />
      </Flex>
    </View>
  );
}
