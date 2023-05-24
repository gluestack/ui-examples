import React from "react";
import { HStack, Icon, Text, VStack } from "../gluestack-ui-components";
import { Globe, Heart, Inbox, Search, User } from "lucide-react-native";

const MobileBottomTabs = () => {
  const bottomTabs = [
    {
      icon: Search,
      label: "Explore",
    },
    {
      icon: Heart,
      label: "Wishlist",
    },
    {
      icon: Globe,
      label: "Trips",
    },
    {
      icon: Inbox,
      label: "Inbox",
    },
    {
      icon: User,
      label: "Profile",
    },
  ];
  return (
    <HStack
      position="absolute"
      bottom={0}
      sx={{ "@md": { display: "none" } }}
      justifyContent="space-between"
      w="100%"
    >
      {bottomTabs.map((tab, index) => {
        return (
          <VStack justifyContent="center" alignItems="center">
            <Icon as={tab.icon} color="$" />
            <Text>{tab.label}</Text>
          </VStack>
        );
      })}
    </HStack>
  );
};

export default MobileBottomTabs;
