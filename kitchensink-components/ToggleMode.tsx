import React from "react";
import { Icon } from "../gluestack-ui-components";
import { Pressable } from "react-native";
import { Moon, Sun } from "lucide-react-native";

const ToggleMode = ({ colorMode, toggleColorMode }: any) => {
  return (
    <Pressable onPress={toggleColorMode}>
      <Icon
        as={colorMode === "dark" ? Sun : Moon}
        size="xl"
        color="$backgroundLight700"
        sx={{ _dark: { color: "$backgroundDark300" } }}
        fill="currentColor"
      />
    </Pressable>
  );
};
export default ToggleMode;
