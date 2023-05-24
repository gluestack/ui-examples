import React from "react";
import {
  Alert,
  Box,
  Checkbox,
  HStack,
  Icon,
  Pressable,
  Text,
  VStack,
} from "../gluestack-ui-components";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  InfoIcon,
} from "../gluestack-ui-components/core/Icons/Icons";

const AmenitiesSection = () => {
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

  const [values, setValues] = React.useState(["wifi", "air-conditioning"]);
  const [viewAllComponents, setViewAllComponents] = React.useState(false);

  return (
    <VStack space="sm">
      <Text fontWeight="$semibold" size="md">
        Ammenities
      </Text>

      <Checkbox.Group value={values} onChange={setValues}>
        {sidebarFiltersAmmenities.map((ammenity: any, index: any) => {
          if (index > 4 && !viewAllComponents) return null;
          return (
            <Checkbox
              value={ammenity.value}
              justifyContent="flex-start"
              size="sm"
              my="$2"
              key={ammenity.value}
            >
              <Checkbox.Indicator>
                <Checkbox.Icon>
                  <CheckIcon />
                </Checkbox.Icon>
              </Checkbox.Indicator>
              <Checkbox.Label>{ammenity.label}</Checkbox.Label>
            </Checkbox>
          );
        })}
      </Checkbox.Group>
      {viewAllComponents ? (
        <Pressable
          onPress={() => {
            setViewAllComponents(false);
          }}
        >
          <HStack justifyContent="space-between">
            <Text size="sm">Show less</Text>
            <Icon as={ChevronDownIcon} size="sm" />
          </HStack>
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            setViewAllComponents(true);
          }}
        >
          <HStack justifyContent="space-between">
            <Text size="sm">Show more</Text>
            <Icon as={ChevronDownIcon} size="sm" />
          </HStack>
        </Pressable>
      )}
    </VStack>
  );
};
export default AmenitiesSection;
