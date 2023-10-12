import React from "react";
import {
  Checkbox,
  CheckboxGroup,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  Heading,
  VStack,
  CheckIcon,
} from "@gluestack-ui/themed";

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
      <CheckboxGroup
        value={values}
        onChange={setValues}
        accessibilityLabel="place-type"
      >
        {sidebarFiltersPlaceType.map((placeType: any) => {
          return (
            <Checkbox
              value={placeType.value}
              size="sm"
              my="$2"
              justifyContent="flex-start"
              key={placeType.value}
              accessibilityLabel={placeType.value}
            >
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon}></CheckboxIcon>
              </CheckboxIndicator>
              <CheckboxLabel ml="$2">{placeType.label}</CheckboxLabel>
            </Checkbox>
          );
        })}
      </CheckboxGroup>
    </VStack>
  );
};
export default PlaceTypeSection;
