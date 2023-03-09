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
    <Box>
      <Text fontWeight="$semibold" fontSize="$md">
        Type of place
      </Text>
      <Checkbox.Group value={values} onChange={setValues}>
        {sidebarFiltersPlaceType.map((placeType: any) => {
          return (
            <Checkbox
              value={placeType.value}
              justifyContent="flex-start"
              size="sm"
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
    </Box>
  );
};
export default PlaceTypeSection;
