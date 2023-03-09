import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Provider } from "./components";
import { config } from "./gluestack-ui.config";
import HomestayPage from "./our-components/HomestayPage";

export default function App() {
  return (
    <View style={styles.container}>
      <Provider config={config.theme}>
        <HomestayPage />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
