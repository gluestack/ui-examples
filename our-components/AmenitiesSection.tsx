import React from "react";
import { Box, Checkbox, HStack, Pressable, Text, VStack } from "../components";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "../components/core/Icons/Icons";

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
    <Box>
      <Text fontWeight="$semibold" fontSize="$md">
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
            <Text>Show less</Text>
            <ChevronUpIcon />
          </HStack>
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            setViewAllComponents(true);
          }}
        >
          <HStack justifyContent="space-between">
            <Text>Show more</Text>
            <ChevronDownIcon />
          </HStack>
        </Pressable>
      )}
    </Box>
  );
};
export default AmenitiesSection;
