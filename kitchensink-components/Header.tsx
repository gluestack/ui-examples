import React from "react";
import { Box, HStack, Icon, Input } from "../gluestack-ui-components";
import { SearchIcon } from "../gluestack-ui-components/core/Icons/Icons";
import HeaderTabs from "./HeaderTabs";
import HomestayLogo from "./HomestayLogo";
import ToggleMode from "./ToggleMode";
import UserProfile from "./UserProfile";
import { Filter, SlidersHorizontal } from "lucide-react-native";
import { Pressable } from "react-native";

const Header = ({ colorMode, toggleColorMode }: any) => {
  return (
    <Box>
      {/* big screen */}
      <Box
        px="$16"
        w="100%"
        borderBottomWidth={1}
        display="none"
        sx={{
          "@md": {
            display: "flex",
          },
          _light: { borderColor: "$borderLight100" },
          _dark: { borderColor: "$borderDark900" },
        }}
      >
        <HStack
          alignItems="center"
          justifyContent="space-between"
          mx="auto"
          w="100%"
        >
          <HomestayLogo />
          <HeaderTabs />
          <HStack space="md">
            <ToggleMode
              colorMode={colorMode}
              toggleColorMode={toggleColorMode}
            />
            <UserProfile />
          </HStack>
        </HStack>
      </Box>
      {/* small screen */}
      <Box
        p="$5"
        sx={{
          "@md": {
            display: "none",
          },
        }}
        w="100%"
      >
        <Input variant="rounded" size="sm" w="100%">
          <Input.Input placeholder="Anywhere • Any week • Add guests" />
          <Input.Icon bg="$primary500" borderRadius="$full" p="$3" m="$1.5">
            <Icon as={SearchIcon} size="xs" color="$white" />
          </Input.Icon>
        </Input>
      </Box>
    </Box>
  );
};
export default Header;
