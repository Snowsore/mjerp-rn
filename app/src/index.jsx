import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./pages/Home";
import Scan from "./pages/Scan";
import Login from "./pages/Login";
import Production from "./pages/Production";
import About from "./pages/About";

const Stack = createNativeStackNavigator();

export default function Root(props) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Production" component={Production} />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="About" component={About} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
