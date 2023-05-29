import React from "react";
import {
  HStack,
  Icon,
  Pressable,
  Text,
  VStack,
  Box,
  Button,
} from "../gluestack-ui-components";

const MobileBottomTabs = ({ bottomTabs, setActiveTab, activeTab }: any) => {
  return (
    <HStack
      position="absolute"
      bottom={0}
      justifyContent="space-between"
      w="100%"
      py="$3"
      px="$4"
      sx={{
        "@md": { display: "none" },
      }}
    >
      {bottomTabs.map((tab: any) => {
        return (
          <Pressable
            key={tab.label}
            onPress={() => {
              setActiveTab(tab.label);
            }}
          >
            <VStack alignItems="center">
              <Icon
                as={tab.icon}
                states={{ active: activeTab === tab.label }}
                color="$textLight400"
                sx={{
                  ":active": {
                    color: "$primary500",
                  },
                }}
                size={20}
              />
              <Text
                color="$textLight400"
                size="xs"
                states={{ active: activeTab === tab.label }}
                sx={{
                  ":active": {
                    color: "$textLight900",
                  },
                  _dark: {
                    ":active": {
                      color: "$textDark100",
                    },
                  },
                }}
              >
                {tab.label}
              </Text>
            </VStack>
          </Pressable>
        );
      })}
    </HStack>
  );
};

export default MobileBottomTabs;
