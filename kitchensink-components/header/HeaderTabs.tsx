import React from "react";
import { SearchIcon } from "../../components";
import { HStack, Icon, Pressable, Text } from "../../components";

const HeaderTabs = () => {
  const [selectedTab, setSelectedTab] = React.useState("Anywhere");
  return (
    <HStack className="h-20 items-center justify-between">
      <HStack className="rounded-full p-1.5 items-center border border-outline-200">
        <Pressable
          className={`rounded-full px-3 py-1.5 ${
            selectedTab === "Anywhere" ? "bg-background-200" : "bg-transparent"
          }`}
          onPress={() => setSelectedTab("Anywhere")}
        >
          <Text size="sm" className="font-medium">
            Anywhere
          </Text>
        </Pressable>
        <Pressable
          className={`rounded-full px-3 py-1.5 ${
            selectedTab === "Anyweek" ? "bg-background-200" : "bg-transparent"
          }`}
          onPress={() => setSelectedTab("Anyweek")}
        >
          <Text size="sm" className="font-medium">
            Anyweek
          </Text>
        </Pressable>
        <Pressable className={`rounded-full px-3 py-1.5 ${
            selectedTab === "Add guests" ? "bg-background-200" : "bg-transparent"
          }`}
          onPress={() => setSelectedTab("Add guests")}
        >
          <Text size="sm" className="font-medium">
            Add guests
          </Text>
        </Pressable>
        <Pressable className='ml-3 p-2 bg-primary-500 rounded-full'>
          <Icon as={SearchIcon} className='w-4 h-4 text-white' />
        </Pressable>
      </HStack>
    </HStack>
  );
};
export default HeaderTabs;
