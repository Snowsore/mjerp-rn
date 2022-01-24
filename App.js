import React, { useState, useEffect } from "react";
import { TailwindProvider } from "tailwind-rn";
import { NavigationContainer } from "@react-navigation/native";
import utilities from "./tailwind.json";

import Main from "./src/Main";

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <Main />
    </TailwindProvider>
  );
}
