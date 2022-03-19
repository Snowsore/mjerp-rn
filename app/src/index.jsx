import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import AboutScreen from "./pages/AboutScreen";
import ScanScreen from "./pages/ScanScreen";

const Stack = createNativeStackNavigator();

export default function Root(props) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} />
        <Stack.Screen name="ScanScreen" component={ScanScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
