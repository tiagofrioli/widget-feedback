import "react-native-gesture-handler";
import React from "react";
import {
  Inter_400Regular,
  Inter_500Medium,
  useFonts,
} from "@expo-google-fonts/inter";

import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Widget from "./src/components/Widget";
import { theme } from "./src/theme";

export default function App() {
  const [fonstLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fonstLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Widget />
    </View>
  );
}
