import React from "react";
import {
  Alert,
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Modal,
  Text,
  VStack,
} from "../components";
import { CheckCircleIcon, CloseIcon } from "../components/core/Icons/Icons";
import { List } from "lucide-react-native";
import { styled } from "@dank-style/react";
import { Text as RNText } from "react-native";

const MainContentHeader = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [alertVisible, setAlertVisible] = React.useState(false);
  return (
    <Box py="$6">
      <HStack alignItems="center" justifyContent="space-between">
        <Heading>New this week</Heading>
        {alertVisible ? (
          <Alert action="success">
            <Alert.Icon>
              <CheckCircleIcon />
            </Alert.Icon>
            <Alert.Text>Boom! Your property listed.</Alert.Text>
          </Alert>
        ) : (
          <Button
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
        )}
      </HStack>

      <ListYourPlaceModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        alertVisible={alertVisible}
        setAlertVisible={setAlertVisible}
      />
    </Box>
  );
};

const ListYourPlaceModal = ({
  modalVisible,
  setModalVisible,
  setAlertVisible,
}: any) => {
  return (
    <Box>
      {modalVisible && (
        <Modal
          isOpen={modalVisible}
          onClose={() => {
            setModalVisible(false);
          }}
        >
          <Modal.Backdrop />

          <Modal.Content>
            <Modal.Header>
              <Heading fontSize="$md">List your place</Heading>
              <Modal.CloseButton>
                <CloseIcon sx={{ w: 16, h: 16 }} />
              </Modal.CloseButton>
            </Modal.Header>
            <Modal.Body>
              <VStack>
                <Text>I want to ...</Text>
                <HStack>
                  <Button
                    variant="outline"
                    rounded="$full"
                    size="sm"
                    px="$5"
                    py="$2"
                  >
                    <Button.Text>Sell</Button.Text>
                  </Button>
                </HStack>
              </VStack>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="outline"
                action="secondary"
                mr="$3"
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <Button.Text>Cancel</Button.Text>
              </Button>
              <Button
                action="primary"
                onPress={() => {
                  setModalVisible(false);
                  setAlertVisible(true);
                }}
              >
                <Button.Text>Confirm</Button.Text>
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      )}
    </Box>
  );
};

export default MainContentHeader;
