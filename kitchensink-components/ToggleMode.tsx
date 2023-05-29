import React from "react";
import { Box, HStack, Switch, Text } from "../gluestack-ui-components";

const ToggleMode = ({ colorMode, toggleColorMode }: any) => {
  return (
    <HStack alignItems="center" space="sm">
      <Text size="sm" fontWeight="$medium">
        dark mode
      </Text>
      <Switch
        size="sm"
        value={colorMode === "dark" ? true : false}
        onValueChange={toggleColorMode}
      />
    </HStack>
  );
};
export default ToggleMode;
