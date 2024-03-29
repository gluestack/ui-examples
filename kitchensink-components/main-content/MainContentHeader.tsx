import React from "react";
import {
  Box,
  Button,
  ButtonIcon,
  ButtonText,
  Heading,
  HStack,
} from "@gluestack-ui/themed";
import { List } from "lucide-react-native";
import ListYourPlaceModal from "./ListYourPlaceModal";

const MainContentHeader = ({ setActiveTab, activeTab }: any) => {
  const [modalVisible, setModalVisible] = React.useState(false);
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
          <ButtonIcon as={List} />
          <ButtonText
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
          </ButtonText>
        </Button>
      </HStack>
      {modalVisible && (
        // list your place modal
        <ListYourPlaceModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
      )}
    </Box>
  );
};

export default MainContentHeader;
