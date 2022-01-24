import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

import { BarCodeScanner } from "expo-barcode-scanner";
import { useTailwind } from "tailwind-rn";

export default function ProfileScreen({ navigation }) {
  const tailwind = useTailwind();

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={tailwind("w-full h-full items-center justify-center")}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={tailwind("w-full h-full")}
      />
    </View>
  );
}
