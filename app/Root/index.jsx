import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Home";
import Login from "./Login";
import Product from "./Product";
import AboutScreen from "./AboutScreen";
import ScanScreen from "./ScanScreen";

import { NavigationContainer } from "@react-navigation/native";
import { LoginProvider } from "@contexts/LoginContext";
import { ThemeProvider } from "@contexts/ThemeContext";
import { NavigationProvider } from "@contexts/NavigationContext";

const Stack = createNativeStackNavigator();

export default function Root(props) {
  return (
    <ThemeProvider>
      <LoginProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Group screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Product" component={Product} />
              <Stack.Screen name="AboutScreen" component={AboutScreen} />
              <Stack.Screen name="ScanScreen" component={ScanScreen} />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </LoginProvider>
    </ThemeProvider>
  );
}
