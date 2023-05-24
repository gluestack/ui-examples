import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Box, Button, GluestackUIProvider } from "./gluestack-ui-components";
import { config } from "./gluestack-ui.config";
import HomestayPage from "./kitchensink-components/HomestayPage";
import { useFonts } from "expo-font";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

export default function App() {
  const [colorMode, setColorMode]: any = React.useState("light");

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  const toggleColorMode = async () => {
    colorMode === "light" ? setColorMode("dark") : setColorMode("light");
  };

  return (
    <SafeAreaView
      style={{
        ...styles.container,
        // backgroundColor: colorMode === "light" ? "#E5E5E5" : "#262626",
      }}
    >
      <GluestackUIProvider config={config.theme} colorMode={colorMode}>
        <HomestayPage colorMode={colorMode} toggleColorMode={toggleColorMode} />
      </GluestackUIProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
