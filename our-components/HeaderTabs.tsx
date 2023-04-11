import React from "react";
import { SearchIcon } from "../components/core/Icons/Icons";
import { Button, HStack, Icon, Pressable, Tabs, Text } from "../components";

const HeaderTabs = () => {
  return (
    <HStack h="$20" alignItems="center" justifyContent="space-between">
      <Tabs w="$full" value="tab1">
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
      </Tabs>
    </HStack>
  );
};
export default HeaderTabs;
