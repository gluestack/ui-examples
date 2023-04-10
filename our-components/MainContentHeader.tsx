import React from "react";
import {
  Alert,
  Box,
  Button,
  Heading,
  HStack,
  Modal,
  Text,
  VStack,
} from "../components";
import {
  CheckCircleIcon,
  CloseIcon,
  ListIcon,
} from "../components/core/Icons/Icons";

const MainContentHeader = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [alertVisible, setAlertVisible] = React.useState(false);
  return (
    <Box>
      <HStack alignItems="center" justifyContent="space-between">
        <Heading
          fontSize="$2xl"
          // style={{
          //   fontFamily: "Inter_700Bold",
          // }}
        >
          New This week
        </Heading>
        {alertVisible ? (
          <Alert action="success">
            <Alert.Icon>
              <CheckCircleIcon />
            </Alert.Icon>
            <Alert.Text>Boom! Your property listed.</Alert.Text>
          </Alert>
        ) : (
          <Button
            // @ts-ignore
            variant="outline"
            action="secondary"
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <ListIcon w="$4" h="$4" />
            <Button.Text
              pl="$2"
              sx={{
                _light: {
                  // @ts-ignore
                  color: "$textLight800",
                },
                _dark: {
                  // @ts-ignore
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
                    // @ts-ignore
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
                // @ts-ignore
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
                // style="solid"
                // @ts-ignore
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
