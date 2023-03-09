import React from "react";
import { Box, Center, HStack } from "../components";
import HeaderTabs from "./HeaderTabs";
import HomestayLogo from "./HomestayLogo";
import ToggleMode from "./ToggleMode";
import UserProfile from "./UserProfile";

const Header = () => {
  return (
    <Box h="$20" w="100%">
      <HStack
        alignItems="center"
        justifyContent="space-between"
        w="80%"
        mx="auto"
      >
        <HomestayLogo />
        <HeaderTabs />
        <HStack space="md">
          <ToggleMode />
          <UserProfile />
        </HStack>
      </HStack>
    </Box>
  );
};
export default Header;
