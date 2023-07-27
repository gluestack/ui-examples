import React from "react";
import { Box, Actionsheet, Text } from "../gluestack-ui-components";
import Sidebar from "./Sidebar";
import { View } from "react-native";

const MobileSidebarActionsheet = React.memo(
  ({ actionsheetVisible, setActionsheetVisible }: any) => {
    const handleClose = () => {
      setActionsheetVisible(false);
    };

    return (
      // <Box w="100%" flex={1}>
      <Actionsheet isOpen={actionsheetVisible} onClose={handleClose}>
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
            <Actionsheet.ScrollView>
              {Array.from({ length: 500 }).map((_, i) => (
                <View
                  key={i}
                  style={{
                    backgroundColor: "red",
                    padding: 20,
                    marginTop: 4,
                  }}
                />
              ))}
            </Actionsheet.ScrollView>
          </Box>
        </Actionsheet.Content>
      </Actionsheet>
      // </Box>
    );
  }
);
export default MobileSidebarActionsheet;
