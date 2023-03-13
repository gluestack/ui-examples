import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Provider } from "./components";
import { config } from "./gluestack-ui.config";
import HomestayPage from "./our-components/HomestayPage";

export default function App() {
  const [colorMode, setColorMode]: any = React.useState("light");

  const toggleColorMode = async () => {
    colorMode === "light" ? setColorMode("dark") : setColorMode("light");
  };
  return (
    <View style={styles.container}>
      <Provider config={config.theme} colorMode={colorMode}>
        <HomestayPage colorMode={colorMode} toggleColorMode={toggleColorMode} />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
