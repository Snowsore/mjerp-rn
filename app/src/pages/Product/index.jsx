import React from "react";

import InfoScreen from "./InfoScreen";
import InfosScreen from "./InfosScreen";
import ManufactureScreen from "./ManufactureScreen";
import InspectScreen from "./InspectScreen";
import PostInfoScreen from "./PostInfoScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ProductProvider } from "@/contexts/ProductContext";

const Stack = createNativeStackNavigator();

export default function Product(props) {
  return (
    <ProductProvider>
      <Stack.Navigator>
        <Stack.Screen name="InfosScreen" component={InfosScreen} />
        <Stack.Screen name="InfoScreen" component={InfoScreen} />
        <Stack.Screen name="ManufactureScreen" component={ManufactureScreen} />
        <Stack.Screen name="InspectScreen" component={InspectScreen} />
        <Stack.Screen name="PostInfoScreen" component={PostInfoScreen} />
      </Stack.Navigator>
    </ProductProvider>
  );
}
