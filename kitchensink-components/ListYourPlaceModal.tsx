import React, { useEffect, useState } from "react";
import {
  Box,
  Modal,
  useToast,
  VStack,
  Icon,
  Center,
  Spinner,
  HStack,
  FormControl,
  Input,
  Button,
  Heading,
  Radio,
  Checkbox,
  TextArea,
  Select,
  Toast,
  ChevronDownIcon,
} from "../gluestack-ui-components";
import {
  CheckCircleIcon,
  CloseIcon,
  CheckIcon,
} from "../gluestack-ui-components/core/Icons/Icons";

const phoneNumberCodes = [
  { code: "+1", country: "USA" },
  { code: "+44", country: "UK" },
  { code: "+91", country: "India" },
  { code: "+61", country: "Australia" },
  { code: "+33", country: "France" },
  { code: "+49", country: "Germany" },
  { code: "+81", country: "Japan" },
  { code: "+86", country: "China" },
  { code: "+7", country: "Russia" },
  { code: "+971", country: "United Arab Emirates" },
];
const propertyType = [
  "Flat/Apartment",
  "Independent House / Villa",
  "Independent Floor/Builder Floor",
  "Plot / Land",
];

const handleClose = (setModalVisible: any, setActiveTab: any) => {
  setModalVisible(false);
  setActiveTab("Home");
};

const ListYourPlaceModal = ({
  modalVisible,
  setModalVisible,
  modalFormStep,
  setModalFormStep,
  activeTab,
  setActiveTab,
}: any) => {
  useEffect(() => {
    setModalFormStep(0);
  }, []);
  const toast = useToast();
  const getModalStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <ModalContent1
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            setModalFormStep={setModalFormStep}
            toast={toast}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        );
      case 1:
        return (
          <ModalContent2
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            setModalFormStep={setModalFormStep}
            toast={toast}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        );
      case 2:
        return (
          <ModalContent3
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            setModalFormStep={setModalFormStep}
            toast={toast}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        );
    }
  };

  return (
    <Box>
      {/* Modal: example */}
      <Modal
        size="md"
        isOpen={modalVisible || activeTab === "Listing"}
        onClose={() => {
          setModalVisible(false);
          setActiveTab("Home");
        }}
      >
        <Modal.Backdrop />
        <Modal.Content>
          <Modal.Header>
            <HStack alignItems="center">
              <Heading size="sm" fontWeight="$semibold">
                List your place
              </Heading>
            </HStack>
            <Modal.CloseButton>
              <Icon as={CloseIcon} sx={{ w: 16, h: 16 }} />
            </Modal.CloseButton>
          </Modal.Header>
          <Modal.Body>
            <VStack space="md">
              {/* <Progress value={(modalFormStep / 3) * 100} size="sm">
                <Progress.FilledTrack />
              </Progress> */}
              {getModalStepContent(modalFormStep)}
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Box>
  );
};

const SaveForLaterButton = ({ setModalVisible, toast, setActiveTab }: any) => {
  const [showSpinner, setShowSpinner] = useState(false);

  const handleSaveForLater = () => {
    handleClose(setModalVisible, setActiveTab);
    // toast example
    toast.show({
      placement: "top",
      render: ({ id }: any) => {
        return (
          <RenderToast
            description="Form has been successfully saved!"
            title="Success!"
            id={id}
          />
        );
      },
    });
  };

  return (
    <Box h="$12" w="100%">
      {showSpinner ? (
        <Center>
          <Spinner size="lg" />
        </Center>
      ) : (
        <Button
          action="secondary"
          variant="outline"
          onPress={() => {
            setShowSpinner(true);
            setTimeout(() => {
              handleSaveForLater();
              setShowSpinner(false);
            }, 3000);
          }}
        >
          <Button.Text>Save for Later</Button.Text>
        </Button>
      )}
    </Box>
  );
};

const PreviousStepperButton = ({ setModalFormStep, step }: any) => {
  return (
    <Button
      action="secondary"
      variant="outline"
      onPress={() => {
        setModalFormStep(step);
      }}
    >
      <Button.Text>Back</Button.Text>
    </Button>
  );
};

const RenderToast = ({ description, title, id }: any) => {
  return (
    <Toast action="success" id={id} top={150}>
      <HStack alignItems="center" space="xs">
        <Icon as={CheckCircleIcon} />
        <Toast.Title>{title}</Toast.Title>
        <Toast.Description>{description}</Toast.Description>
      </HStack>
    </Toast>
  );
};

const NextStepperButton = ({ setModalFormStep, step }: any) => {
  return (
    <Button
      onPress={() => {
        setModalFormStep(step);
      }}
    >
      <Button.Text>Next</Button.Text>
    </Button>
  );
};

const PostNowButton = ({ setModalVisible, toast, setActiveTab }: any) => {
  return (
    <Button
      onPress={() => {
        handleClose(setModalVisible, setActiveTab);
        toast.show({
          placement: "top",
          render: () => {
            return (
              <Toast action="success" top={150}>
                <HStack alignItems="center" space="xs">
                  <Icon as={CheckCircleIcon} />
                  <Toast.Title>Boom!</Toast.Title>
                  <Toast.Description>Your property listed.</Toast.Description>
                </HStack>
              </Toast>
            );
          },
        });
      }}
    >
      <Button.Text>Post Now</Button.Text>
    </Button>
  );
};

const ModalContent1 = ({
  setModalVisible,
  setModalFormStep,
  toast,
  activeTab,
  setActiveTab,
}: any) => {
  const [values, setValues]: any = React.useState("Residential");
  return (
    <VStack space="md">
      <VStack space="sm">
        <FormControl>
          <FormControl.Label>
            <FormControl.Label.Text>I want to...</FormControl.Label.Text>
          </FormControl.Label>
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
        </FormControl>
      </VStack>
      <VStack space="md">
        <VStack space="sm">
          <FormControl>
            <FormControl.Label>
              <FormControl.Label.Text>Property is...</FormControl.Label.Text>
            </FormControl.Label>
            <Radio.Group value={values} onChange={setValues}>
              <HStack space="md">
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
          </FormControl>
        </VStack>
        <HStack flexWrap="wrap" space="sm">
          {propertyType.map((item, index) => (
            <Button
              key={index}
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
      <NextStepperButton setModalFormStep={setModalFormStep} step={1} />
    </VStack>
  );
};

const ModalContent2 = ({ setModalFormStep }: any) => {
  return (
    <VStack space="md">
      <AmenitiesSection />
      <VStack space="sm" w="100%">
        <NextStepperButton setModalFormStep={setModalFormStep} step={2} />
        <PreviousStepperButton setModalFormStep={setModalFormStep} step={0} />
      </VStack>
    </VStack>
  );
};

const ModalContent3 = ({
  setModalVisible,
  toast,
  setActiveTab,
  activeTab,
}: any) => {
  return (
    <VStack space="md">
      <FormControl>
        <FormControl.Label>
          <FormControl.Label.Text>Title</FormControl.Label.Text>
        </FormControl.Label>
        <Input w="100%">
          <Input.Input placeholder="Enter property name" />
        </Input>
      </FormControl>
      <FormControl>
        <FormControl.Label>
          <FormControl.Label.Text>Description</FormControl.Label.Text>
        </FormControl.Label>
        {/* textarea: example */}
        <TextArea>
          <TextArea.Input placeholder="Provide description" />
        </TextArea>
      </FormControl>
      <VStack space="sm">
        <FormControl>
          <FormControl.Label>
            <FormControl.Label.Text>Contact me...</FormControl.Label.Text>
          </FormControl.Label>
          <HStack space="sm">
            {/* select: example */}

            <Select defaultValue="+91" w="$24">
              <Select.Trigger>
                <Select.Input />
                <Select.Icon as={ChevronDownIcon} mr="$3" />
              </Select.Trigger>
              <Select.Portal>
                <Select.Backdrop />
                <Select.Content>
                  <Select.DragIndicatorWrapper>
                    <Select.DragIndicator />
                  </Select.DragIndicatorWrapper>
                  {phoneNumberCodes.map((item, index) => (
                    <Select.Item
                      label={`${item.code}`}
                      value={`${item.code}`}
                    />
                  ))}
                </Select.Content>
              </Select.Portal>
            </Select>
            {/* input: example */}
            <Input flex={1}>
              <Input.Input placeholder="Phone number" />
            </Input>
          </HStack>
        </FormControl>
        <VStack space="sm">
          <PostNowButton
            setModalVisible={setModalVisible}
            toast={toast}
            setActiveTab={setActiveTab}
          />
          <SaveForLaterButton
            setModalVisible={setModalVisible}
            toast={toast}
            setActiveTab={setActiveTab}
          />
        </VStack>
      </VStack>
    </VStack>
  );
};

const AmenitiesSection = () => {
  const [values, setValues] = React.useState(["wifi", "air-conditioning"]);
  const sidebarFiltersAmmenities = [
    {
      label: "Wifi",
      value: "wifi",
    },
    {
      label: "Washing machine",
      value: "washing-machine",
    },
    {
      label: "Air conditioning",
      value: "air-conditioning",
    },
    {
      label: "Kitchen",
      value: "kitchen",
    },
    {
      label: "Dryer",
      value: "dryer",
    },
    {
      label: "Iron",
      value: "iron",
    },
    {
      label: "Hair Dryer",
      value: "hair-dryer",
    },
  ];
  return (
    <VStack space="sm">
      <FormControl>
        <FormControl.Label>
          <FormControl.Label.Text>Ammenities</FormControl.Label.Text>
        </FormControl.Label>
        <Checkbox.Group value={values} onChange={setValues}>
          {sidebarFiltersAmmenities.map((ammenity: any, index: any) => {
            return (
              <Checkbox
                value={ammenity.value}
                justifyContent="flex-start"
                size="sm"
                my="$2"
                key={ammenity.value}
              >
                <Checkbox.Indicator>
                  <Checkbox.Icon as={CheckIcon} />
                </Checkbox.Indicator>
                <Checkbox.Label>{ammenity.label}</Checkbox.Label>
              </Checkbox>
            );
          })}
        </Checkbox.Group>
      </FormControl>
    </VStack>
  );
};

export default ListYourPlaceModal;
