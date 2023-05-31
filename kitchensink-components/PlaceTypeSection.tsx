import React from "react";
import {
  Box,
  Checkbox,
  HStack,
  Heading,
  Text,
  VStack,
} from "../gluestack-ui-components";
import { CheckIcon } from "../gluestack-ui-components/core/Icons/Icons";

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
      <Heading size="sm">Type of place</Heading>
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