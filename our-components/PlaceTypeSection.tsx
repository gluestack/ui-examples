import React from "react";
import { Box, Checkbox, HStack, Text, VStack } from "../components";
import { CheckIcon } from "../components/core/Icons/Icons";

const PlaceTypeSection = () => {
  const sidebarFiltersPlaceType = [
    {
      label: "Entire place",
      value: "entirePlace",
    },
    {
      label: "Private room",
      value: "privateRoom",
    },
    {
      label: "Shared room",
      value: "sharedRoom",
    },
  ];

  const [values, setValues] = React.useState(["entirePlace"]);

  return (
    <VStack space="sm">
      <Text fontWeight="$semibold" size="md">
        Type of place
      </Text>
      <Checkbox.Group value={values} onChange={setValues}>
        {sidebarFiltersPlaceType.map((placeType: any) => {
          return (
            <Checkbox
              value={placeType.value}
              size="sm"
              my="$2"
              justifyContent="flex-start"
              key={placeType.value}
            >
              <Checkbox.Indicator>
                <Checkbox.Icon>
                  <CheckIcon />
                </Checkbox.Icon>
              </Checkbox.Indicator>
              <Checkbox.Label>{placeType.label}</Checkbox.Label>
            </Checkbox>
          );
        })}
      </Checkbox.Group>
    </VStack>
  );
};
export default PlaceTypeSection;
