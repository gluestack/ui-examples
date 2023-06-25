import React from "react";
import { Icon, MoonIcon, SunIcon } from "../../gluestack-ui-components";
import { Pressable } from "react-native";

const ToggleMode = ({ colorMode, toggleColorMode }: any) => {
  return (
    <Pressable onPress={toggleColorMode}>
      <Icon
        as={colorMode === "dark" ? SunIcon : MoonIcon}
        size="xl"
        color="$backgroundLight700"
        sx={{
          _dark: {
            color: "$backgroundDark300",
          },
        }}
        fill="currentColor"
      />
    </Pressable>
  );
};
export default ToggleMode;
