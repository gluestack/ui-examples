import React from "react";
import { Box, Actionsheet, Heading } from "../gluestack-ui-components";
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
        <Actionsheet.Content
          sx={{
            _dark: {
              bg: "$backgroundDark950",
            },
          }}
        >
          <Box h="100%" w="100%">
            <Actionsheet.DragIndicatorWrapper>
              <Actionsheet.DragIndicator />
            </Actionsheet.DragIndicatorWrapper>
            {/* <Heading size="md" px="$4" py="$4">
              Customize your search
            </Heading> */}
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
