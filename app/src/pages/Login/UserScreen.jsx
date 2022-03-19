import { useEffect } from "react";

import { Group, Frame } from "@/components/mj";

import { useLogin } from "@/contexts/LoginContext";

export default function LoginScreen(props) {
  const [login, setLogin] = useLogin();

  const { uid, username, phone } = login;

  useEffect(() => {
    console.log("Go");
  }, []);

  return (
    <Frame>
      <Group>
        <Group.Item title="编号" value={uid} />
        <Group.Item
          title="姓名"
          value={username}
          onPress={() => props.navigation.push("NameUpdateScreen")}
        />
        <Group.Item
          title="手机号"
          value={phone}
          onPress={() => props.navigation.push("PhoneUpdateScreen")}
        />
        <Group.Item
          value="密码管理"
          onPress={() => props.navigation.push("PasswordUpdateScreen")}
        />
      </Group>
    </Frame>
  );
}
