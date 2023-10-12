import React from "react";
import {
  Box,
  Actionsheet,
  ActionsheetDragIndicatorWrapper,
  ActionsheetDragIndicator,
  ActionsheetScrollView,
  ActionsheetBackdrop,
  ActionsheetContent,
} from "@gluestack-ui/themed";
import Sidebar from "./Sidebar";

const MobileSidebarActionsheet = ({
  actionsheetVisible,
  setActionsheetVisible,
}: any) => {
  const handleClose = () => {
    setActionsheetVisible(false);
  };
  return (
    <Actionsheet
      isOpen={actionsheetVisible}
      onClose={handleClose}
      snapPoints={[80]}
    >
      <ActionsheetBackdrop />
      <ActionsheetContent
        sx={{
          _dark: {
            bg: "$backgroundDark950",
          },
        }}
      >
        <Box h="100%" w="100%">
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetScrollView>
            <Box w="100%">
              <Sidebar />
            </Box>
          </ActionsheetScrollView>
        </Box>
      </ActionsheetContent>
    </Actionsheet>
  );
};
export default MobileSidebarActionsheet;
