import React, { useContext } from "react";
import { Icon, MoonIcon, SunIcon, Button } from "@gluestack-ui/themed";
import { ThemeContext } from "../../App";

const ToggleMode = () => {
  const { colorMode, toggleColorMode } = useContext(ThemeContext);
  return (
    <Button p={0} backgroundColor={"transparent"} onPress={toggleColorMode}>
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
    </Button>
  );
};
export default ToggleMode;
