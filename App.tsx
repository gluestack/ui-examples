import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import {
  Box,
  Button,
  GluestackUIProvider,
  Icon,
  Pressable,
} from "./gluestack-ui-components";
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
import { Motion } from "@legendapp/motion";
import { Heart } from "lucide-react-native";

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
    <>
      {/* top SafeAreaView */}
      <SafeAreaView
        style={{
          backgroundColor: colorMode === "light" ? "#E5E5E5" : "#262626",
        }}
      />
      {/* bottom SafeAreaView */}
      <SafeAreaView
        style={{
          ...styles.container,
          backgroundColor: colorMode === "light" ? "white" : "#171717",
        }}
      >
        {/* gluestack-ui provider */}
        <GluestackUIProvider config={config.theme} colorMode={colorMode}>
          {/* main app page */}
          <HomestayPage
            colorMode={colorMode}
            toggleColorMode={toggleColorMode}
          />
        </GluestackUIProvider>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
  },
});
