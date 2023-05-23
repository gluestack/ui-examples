import React from "react";
import { SearchIcon } from "../components/core/Icons/Icons";
import {
  Box,
  Button,
  HStack,
  Icon,
  Pressable,
  Tabs,
  Text,
} from "../components";

const HeaderTabs = () => {
  const [selectedTab, setSelectedTab] = React.useState("Anywhere");
  return (
    <HStack h="$20" alignItems="center" justifyContent="space-between">
      <HStack
        rounded="$full"
        p="$1.5"
        alignItems="center"
        borderWidth={1}
        borderColor="$borderLight200"
        sx={{ _dark: { borderColor: "$borderDark700" } }}
      >
        <Pressable
          rounded="$full"
          bg={
            selectedTab === "Anywhere" ? "$backgroundLight100" : "transparent"
          }
          sx={{
            _dark: {
              bg:
                selectedTab === "Anywhere"
                  ? "$backgroundDark700"
                  : "transparent",
            },
          }}
          onPress={() => setSelectedTab("Anywhere")}
          px="$2"
          py="$1"
        >
          <Text size="sm">Anywhere</Text>
        </Pressable>
        <Pressable
          rounded="$full"
          px="$2"
          py="$1"
          bg={selectedTab === "Anyweek" ? "$backgroundLight100" : "transparent"}
          sx={{
            _dark: {
              bg:
                selectedTab === "Anyweek"
                  ? "$backgroundDark700"
                  : "transparent",
            },
          }}
          onPress={() => setSelectedTab("Anyweek")}
        >
          <Text size="sm">Anyweek</Text>
        </Pressable>
        <Pressable
          rounded="$full"
          px="$2"
          py="$1"
          bg={
            selectedTab === "Add guests" ? "$backgroundLight100" : "transparent"
          }
          sx={{
            _dark: {
              bg:
                selectedTab === "Add guests"
                  ? "$backgroundDark700"
                  : "transparent",
            },
          }}
          onPress={() => setSelectedTab("Add guests")}
        >
          <Text size="sm">Add guests</Text>
        </Pressable>
        <Pressable ml="$3" p="$2" bg="$primary500" rounded="$full">
          <Icon as={SearchIcon} color="white" w="$4" h="$4" />
        </Pressable>
      </HStack>
    </HStack>
  );
};
export default HeaderTabs;
