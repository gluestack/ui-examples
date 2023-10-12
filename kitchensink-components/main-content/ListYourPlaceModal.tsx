import React, { useEffect, useState } from "react";
import {
  Box,
  Modal,
  useToast,
  ToastDescription,
  ToastTitle,
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
  Textarea,
  Select,
  Toast,
  ChevronDownIcon,
  CheckCircleIcon,
  CloseIcon,
  CheckIcon,
  CircleIcon,
  FormControlLabelText,
  FormControlLabel,
  InputField,
  TextareaInput,
  SelectTrigger,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectBackdrop,
  SelectIcon,
  SelectInput,
  SelectContent,
  SelectPortal,
  CheckboxGroup,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
  ButtonText,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalBackdrop,
  ModalContent,
  RadioIndicator,
  RadioLabel,
  RadioIcon,
  RadioGroup,
} from "@gluestack-ui/themed";

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
const sellOrRentOptions = ["Sell", "Rent/Lease"];

const handleClose = (setModalVisible: any) => {
  setModalVisible(false);
};

const ListYourPlaceModal = ({ modalVisible, setModalVisible }: any) => {
  const [modalFormStep, setModalFormStep] = React.useState(0);

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
          />
        );
      case 1:
        return (
          <ModalContent2
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            setModalFormStep={setModalFormStep}
            toast={toast}
          />
        );
      case 2:
        return (
          <ModalContent3
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            setModalFormStep={setModalFormStep}
            toast={toast}
          />
        );
    }
  };

  return (
    <Box>
      {/* Modal: example */}
      <Modal
        size="md"
        isOpen={modalVisible}
        onClose={() => {
          setModalVisible(false);
        }}
        avoidKeyboard
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <HStack alignItems="center">
              <Heading size="sm" fontWeight="$semibold">
                List your place
              </Heading>
            </HStack>
            <ModalCloseButton>
              <Icon as={CloseIcon} sx={{ w: 16, h: 16 }} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <VStack space="md">{getModalStepContent(modalFormStep)}</VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

const SaveForLaterButton = ({ setModalVisible, toast }: any) => {
  const [showSpinner, setShowSpinner] = useState(false);

  const handleSaveForLater = () => {
    handleClose(setModalVisible);
    // toast example
    toast.show({
      placement: "top",
      render: ({ id }: any) => {
        return (
          <RenderToast
            description="Your property listing has been successfully saved."
            nativeId={id}
          />
        );
      },
    });
  };

  return (
    <Box h="$12" w="100%">
      {showSpinner ? (
        <Center>
          <Spinner size="large" color="$primary500" />
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
            }, 2000);
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
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
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
      <ButtonText>Next</ButtonText>
    </Button>
  );
};

const PostNowButton = ({ setModalVisible, toast }: any) => {
  return (
    <Button
      onPress={() => {
        handleClose(setModalVisible);
        toast.show({
          placement: "top",
          render: ({ id }: any) => {
            return (
              <RenderToast
                description="Your property has been listed."
                title="Congratulations!"
                nativeId={id}
              />
            );
          },
        });
      }}
    >
      <ButtonText>Post Now</ButtonText>
    </Button>
  );
};

const ModalContent1 = ({ setModalFormStep, toast }: any) => {
  const [values, setValues]: any = React.useState("Residential");
  const [selectedSellOrRentOption, setSelectedSellOrRentOption] = useState(
    sellOrRentOptions[0]
  );
  const [selectedPropertyTypeOptions, setSelectedPropertyTypeOptions]: any =
    useState([]);

  const handlePropertyTypeSelection = (item: any) => {
    if (selectedPropertyTypeOptions.includes(item)) {
      setSelectedPropertyTypeOptions(
        selectedPropertyTypeOptions.filter((option: string) => option !== item)
      );
    } else {
      setSelectedPropertyTypeOptions([...selectedPropertyTypeOptions, item]);
    }
  };
  return (
    <VStack space="md">
      <VStack space="sm">
        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>I want to...</FormControlLabelText>
          </FormControlLabel>
          <HStack space="sm">
            {sellOrRentOptions.map((item, index) => (
              <Button
                key={index}
                action={
                  item === selectedSellOrRentOption ? "primary" : "secondary"
                }
                rounded="$full"
                variant="outline"
                size="xs"
                mb="$2"
                onPress={() => {
                  setSelectedSellOrRentOption(item);
                }}
              >
                <Button.Text>{item}</Button.Text>
              </Button>
            ))}
          </HStack>
        </FormControl>
      </VStack>
      <VStack space="md">
        <VStack space="sm">
          <FormControl>
            <FormControlLabel>
              <FormControlLabelText>Property is...</FormControlLabelText>
            </FormControlLabel>
            <RadioGroup
              value={values}
              onChange={setValues}
              accessibilityLabel="place-type"
            >
              <HStack space="md">
                <Radio value="Residential">
                  <RadioIndicator>
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>
                  <RadioLabel ml="$2">Residential</RadioLabel>
                </Radio>
                <Radio value="Commercial">
                  <RadioIndicator>
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>
                  <Radio.Label ml="$2">Commercial</Radio.Label>
                </Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
        </VStack>
        <HStack flexWrap="wrap" space="sm">
          {propertyType.map((item: string, index: any) => (
            <Button
              key={index}
              action={
                selectedPropertyTypeOptions.includes(item)
                  ? "primary"
                  : "secondary"
              }
              rounded="$full"
              variant="outline"
              size="xs"
              mb="$2"
              onPress={() => {
                handlePropertyTypeSelection(item);
              }}
            >
              <ButtonText>{item}</ButtonText>
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

const ModalContent3 = ({ setModalVisible, toast }: any) => {
  return (
    <VStack space="md">
      <FormControl>
        <FormControlLabel>
          <FormControlLabelText>Title</FormControlLabelText>
        </FormControlLabel>
        <Input w="100%">
          <InputField placeholder="Enter property name" />
        </Input>
      </FormControl>
      <FormControl>
        <FormControlLabel>
          <FormControlLabelText>Description</FormControlLabelText>
        </FormControlLabel>
        {/* textarea: example */}
        <Textarea>
          <TextareaInput placeholder="Provide description" />
        </Textarea>
      </FormControl>
      <VStack space="sm">
        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>Contact me</FormControlLabelText>
          </FormControlLabel>
          <HStack space="sm">
            {/* select: example */}
            <Select defaultValue="+91" w="$24" placeholder="Select code">
              <SelectTrigger>
                <SelectInput />
                <SelectIcon as={ChevronDownIcon} mr="$3" />
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  {phoneNumberCodes.map((item, index) => (
                    <Select.Item
                      label={`${item.code}`}
                      value={`${item.code}`}
                      key={`${item.code}`}
                    />
                  ))}
                </SelectContent>
              </SelectPortal>
            </Select>
            {/* input: example */}
            <Input flex={1}>
              <InputField
                placeholder="Phone number"
                // keyboardType="number-pad"
              />
            </Input>
          </HStack>
        </FormControl>
        <VStack space="sm">
          <PostNowButton setModalVisible={setModalVisible} toast={toast} />
          <SaveForLaterButton setModalVisible={setModalVisible} toast={toast} />
        </VStack>
      </VStack>
    </VStack>
  );
};

const AmenitiesSection = () => {
  const [values, setValues] = React.useState(["wifi", "air-conditioning"]);
  return (
    <VStack space="sm">
      <FormControl>
        <FormControlLabel>
          <FormControlLabelText>Ammenities</FormControlLabelText>
        </FormControlLabel>
        <CheckboxGroup
          value={values}
          onChange={setValues}
          accessibilityLabel="ammenities"
        >
          {sidebarFiltersAmmenities.map((ammenity: any) => {
            return (
              <Checkbox
                value={ammenity.value}
                justifyContent="flex-start"
                my="$2"
                key={ammenity.value}
                accessibilityLabel={ammenity.value}
              >
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel ml="$2">{ammenity.label}</CheckboxLabel>
              </Checkbox>
            );
          })}
        </CheckboxGroup>
      </FormControl>
    </VStack>
  );
};

export default ListYourPlaceModal;
