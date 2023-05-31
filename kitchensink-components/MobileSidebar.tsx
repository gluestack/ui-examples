import React, { useEffect } from "react";
import {
  Box,
  Text,
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
  return (
    <Box w="100%" flex={1}>
      <Actionsheet isOpen={activeTab === "Filter"} onClose={handleClose}>
        <Actionsheet.Backdrop />
        <Actionsheet.Content>
          <Box h="100%" w="100%">
            <Actionsheet.DragIndicatorWrapper>
              <Actionsheet.DragIndicator />
            </Actionsheet.DragIndicatorWrapper>
            <HStack justifyContent="space-between" py="$3" px="$4" w="100%">
              <Text>Filters</Text>
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
