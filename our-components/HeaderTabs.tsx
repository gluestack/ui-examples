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
          bg="$backgroundLight100"
          sx={{ _dark: { bg: "$backgroundLight700" } }}
          px="$2"
          py="$1"
        >
          <Text fontSize="$sm">Anywhere</Text>
        </Pressable>
        <Pressable rounded="$full" px="$2" py="$1">
          <Text fontSize="$sm">Anyweek</Text>
        </Pressable>
        <Pressable rounded="$full" px="$2" py="$1">
          <Text fontSize="$sm">Add guests</Text>
        </Pressable>
        <Pressable ml="$3" p="$2" bg="$primary500" rounded="$full">
          <Icon as={SearchIcon} color="white" w="$4" h="$4" />
        </Pressable>
      </HStack>
      {/* <Tabs w="$full" value="tab1">
        <Tabs.TabList>
          <Tabs.Tab value="tab1">
            <Tabs.TabTitle>Anywhere</Tabs.TabTitle>
          </Tabs.Tab>
          <Tabs.Tab value="tab2">
            <Tabs.TabTitle>Anyweek</Tabs.TabTitle>
          </Tabs.Tab>
          <Tabs.Tab value="tab3">
            <Tabs.TabTitle>Add guests</Tabs.TabTitle>
          </Tabs.Tab>
          <Pressable bg="$primary500" p="$2" borderRadius="$full">
            <Icon as={SearchIcon} color="$backgroundLight0" />
          </Pressable>
        </Tabs.TabList>
        <Tabs.TabPanels></Tabs.TabPanels>
      </Tabs> */}
    </HStack>
  );
};
export default HeaderTabs;
