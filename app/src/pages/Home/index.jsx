import AnnounceScreen from "./AnnounceScreen";
import ProfileScreen from "./ProfileScreen";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

export default function Home(props) {
  return (
    <Tab.Navigator backBehavior="none" initialRouteName="Welcome">
      <Tab.Screen
        name="Welcome"
        component={AnnounceScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={AnnounceScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="qrcode-scan"
              color={color}
              size={35}
            />
          ),
          tabBarOptions: { showLabel: false },
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.push("Scan");
          },
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
