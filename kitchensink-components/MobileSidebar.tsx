import React, { useEffect } from "react";
import {
  Box,
  Text,
  Pressable,
  CloseIcon,
  Icon,
  HStack,
  Actionsheet,
  Center,
} from "../gluestack-ui-components";
import Sidebar from "./Sidebar";
import { ScrollView, View } from "react-native";

const MobileSidebar = ({ activeTab, setActiveTab }: any) => {
  const handleClose = () => {
    setActiveTab("Home");
  };
  const [fullPageActionsheet, setFullPageActionsheet] = React.useState(false);
  return (
    <Box w="100%" flex={1}>
      <Actionsheet isOpen={activeTab === "Filter"} onClose={handleClose}>
        <Actionsheet.Backdrop />
        <Actionsheet.Content maxHeight={fullPageActionsheet ? "100%" : "80%"}>
          <Box h="100%" w="100%">
            <Pressable
              onPress={() => {
                setFullPageActionsheet(!fullPageActionsheet);
              }}
              w="100%"
            >
              <Center>
                <Box
                  h="$4"
                  w="$12"
                  bg="$gray500"
                  borderRadius="$full"
                  mt="$2"
                />
              </Center>
            </Pressable>

            <HStack justifyContent="space-between" py="$3" px="$4" w="100%">
              <Text>Filters</Text>
              <Pressable onPress={handleClose}>
                <Icon as={CloseIcon} />
              </Pressable>
            </HStack>
            <Actionsheet.ScrollView>
              <Box w="100%">
                <Sidebar />
              </Box>
            </Actionsheet.ScrollView>
          </Box>
        </Actionsheet.Content>
      </Actionsheet>
    </Box>
  );
};
export default MobileSidebar;
