import React, { useState } from "react";
import { Box, Button, Heading, HStack, Icon } from "../gluestack-ui-components";
import { List } from "lucide-react-native";
import ListYourPlaceModal from "./ListYourPlaceModal";

const MainContentHeader = ({
  modalVisible,
  setModalVisible,
  modalFormStep,
  setModalFormStep,
  setActiveTab,
  activeTab,
}: any) => {
  return (
    <Box pt="$6" pb="$2.5" px="$4" sx={{ "@md": { px: 0 } }}>
      <HStack w="100%" alignItems="center" justifyContent="space-between">
        <Heading size="xl">New this week</Heading>
        {/* Hidden for mobile screens */}
        <Button
          display="none"
          sx={{
            "@md": {
              display: "flex",
            },
          }}
          ml="auto"
          variant="outline"
          action="secondary"
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Icon as={List} w="$4" h="$4" />
          <Button.Text
            pl="$2"
            sx={{
              _light: {
                color: "$textLight800",
              },
              _dark: {
                color: "$textDark300",
              },
            }}
          >
            List your place
          </Button.Text>
        </Button>
      </HStack>
      {modalVisible && (
        // list your place modal
        <ListYourPlaceModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          modalFormStep={modalFormStep}
          setModalFormStep={setModalFormStep}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
      )}
    </Box>
  );
};

export default MainContentHeader;
