import React from "react";
import { Box, HStack, Icon, Input } from "../components";
import { SearchIcon } from "../components/core/Icons/Icons";
import HeaderTabs from "./HeaderTabs";
import HomestayLogo from "./HomestayLogo";
import ToggleMode from "./ToggleMode";
import UserProfile from "./UserProfile";

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
        h="$20"
        w="100%"
        borderBottomWidth={1}
        borderBottomColor="$borderLight100"
      >
        <Input variant="rounded" w="100%">
          <Input.Icon>
            <Icon
              as={SearchIcon}
              sx={{
                _light: { color: "backgroundLight400" },
                _dark: { color: "white" },
              }}
            />
          </Input.Icon>
          <Input.Input placeholder="Anywhere • Any week • Add guests" px="$2" />
          <Box bg="$rose500" p="$1" borderRadius="$full">
            <Input.Icon>
              <Icon
                as={SearchIcon}
                sx={{
                  _light: { color: "backgroundLight400" },
                  _dark: { color: "white" },
                }}
              />
            </Input.Icon>
          </Box>
        </Input>
      </Box>
    </Box>
  );
};
export default Header;
