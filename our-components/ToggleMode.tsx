import React from "react";
import { Box, HStack, Switch, Text } from "../components";

const ToggleMode = () => {
  return (
    <HStack alignItems="center" space="sm">
      <Text size="sm">dark mode</Text>
      <Switch size="sm" value={false} />
    </HStack>
  );
};
export default ToggleMode;
