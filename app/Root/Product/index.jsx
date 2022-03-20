import React from "react";

import InfoScreen from "./InfoScreen";
import InfosScreen from "./InfosScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ProductProvider } from "@contexts/ProductContext";

const Stack = createNativeStackNavigator();

export default function Product(props) {
  return (
    <ProductProvider>
      <Stack.Navigator>
        <Stack.Screen name="InfoScreen" component={InfoScreen} />
        <Stack.Screen name="InfosScreen" component={InfosScreen} />
      </Stack.Navigator>
    </ProductProvider>
  );
}
