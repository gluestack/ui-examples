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
  Radio,
  Input,
  Toast,
  useToast,
} from "../gluestack-ui-components";
import {
  CheckCircleIcon,
  CloseIcon,
} from "../gluestack-ui-components/core/Icons/Icons";
import { List } from "lucide-react-native";

const MainContentHeader = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [alertVisible, setAlertVisible] = React.useState(false);
  return (
    <Box py="$6">
      <HStack alignItems="center" justifyContent="space-between" h={40}>
        <Heading>New this week</Heading>
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
  const propertyType = [
    "Flat/Apartment",
    "Independent House / Villa",
    "Builder Floor",
    "Plot / Land",
  ];
  const [values, setValues] = React.useState("Residential");
  const toast = useToast();
  return (
    <Box>
      {modalVisible && (
        <Modal
          size="sm"
          isOpen={modalVisible}
          onClose={() => {
            setModalVisible(false);
          }}
        >
          <Modal.Backdrop />
          <Modal.Content>
            <Modal.Header>
              <Heading size="sm" fontWeight="$semibold">
                List your place
              </Heading>
              <Modal.CloseButton>
                <Icon as={CloseIcon} sx={{ w: 16, h: 16 }} />
              </Modal.CloseButton>
            </Modal.Header>
            <Modal.Body>
              <VStack space="md">
                <VStack space="sm">
                  <Text>I want to ...</Text>
                  <HStack space="sm">
                    <Button variant="outline" rounded="$full" size="xs">
                      <Button.Text>Sell</Button.Text>
                    </Button>
                    <Button
                      variant="outline"
                      action="secondary"
                      rounded="$full"
                      size="xs"
                    >
                      <Button.Text>Rent/Lease</Button.Text>
                    </Button>
                  </HStack>
                </VStack>
                <VStack space="sm">
                  <Text>Property is...</Text>
                  <Radio.Group value={values} onChange={setValues}>
                    <HStack space="sm">
                      <Radio value="Residential" size="sm">
                        <Radio.Indicator>
                          <Radio.Icon />
                        </Radio.Indicator>
                        <Radio.Label>Residential</Radio.Label>
                      </Radio>
                      <Radio value="Commercial" size="sm">
                        <Radio.Indicator>
                          <Radio.Icon />
                        </Radio.Indicator>
                        <Radio.Label>Commercial</Radio.Label>
                      </Radio>
                    </HStack>
                  </Radio.Group>
                  <HStack flexWrap="wrap" space="sm">
                    {propertyType.map((item, index) => (
                      <Button
                        action="secondary"
                        rounded="$full"
                        variant="outline"
                        size="xs"
                        mb="$2"
                      >
                        <Button.Text>{item}</Button.Text>
                      </Button>
                    ))}
                  </HStack>
                </VStack>
                <VStack space="sm">
                  <Text>Contact me...</Text>
                  <Input>
                    <Input.Input placeholder="Phone number" />
                  </Input>
                </VStack>
                <VStack space="sm">
                  <Button
                    onPress={() => {
                      setModalVisible(false);
                      setAlertVisible(true);
                      toast.show({
                        placement: "top",
                        render: () => {
                          return (
                            <Toast action="success" top={150}>
                              <HStack alignItems="center" space="xs">
                                <Icon as={CheckCircleIcon} />
                                <Toast.Title>Boom!</Toast.Title>
                                <Toast.Description>
                                  Your property listed.
                                </Toast.Description>
                              </HStack>
                            </Toast>
                          );
                        },
                      });
                    }}
                  >
                    <Button.Text>Post Now</Button.Text>
                  </Button>
                  <Button
                    action="secondary"
                    variant="outline"
                    onPress={() => {
                      setModalVisible(false);
                    }}
                  >
                    <Button.Text>Save for Later</Button.Text>
                  </Button>
                </VStack>
              </VStack>
            </Modal.Body>
          </Modal.Content>
        </Modal>
      )}
    </Box>
  );
};

export default MainContentHeader;
