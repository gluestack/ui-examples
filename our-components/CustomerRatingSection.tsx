import React from "react";
import { Box, Checkbox, HStack, Switch, Text, VStack } from "../components";
import { CheckIcon } from "../components/core/Icons/Icons";
import { StarIcon } from "../components/core/Icons/Icons/Star";

const CustomerRatingSection = () => {
  const sidebarFiltersCustomerRatings = [
    {
      label: "5 stars",
      value: "5 stars",
    },
    {
      label: "4+ stars",
      value: "4+ stars",
    },
    {
      label: "3+ stars",
      value: "3+ stars",
    },
    {
      label: "2+ stars",
      value: "2+ stars",
    },
  ];
  const [values, setValues] = React.useState(["wifi", "air-conditioning"]);

  return (
    <VStack w="100%" space="md">
      <Text fontWeight="$semibold" fontSize="$md" color="$textLight900">
        Customer Ratings
      </Text>
      <Checkbox.Group value={values} onChange={setValues}>
        {sidebarFiltersCustomerRatings.map((placeType: any) => {
          return (
            <Checkbox value={placeType.value} size="sm" my="$2">
              <Checkbox.Indicator>
                <Checkbox.Icon>
                  <CheckIcon />
                </Checkbox.Icon>
              </Checkbox.Indicator>
              <Checkbox.Label>
                <HStack alignItems="center" space="xs">
                  <StarIcon
                    w="$3"
                    h="$3"
                    sx={{
                      _dark: { color: "$backgroundDark50" },
                      _light: { color: "black" },
                    }}
                  />
                  <Text>{placeType.label}</Text>
                </HStack>
              </Checkbox.Label>
            </Checkbox>
          );
        })}
      </Checkbox.Group>
    </VStack>
  );
};
export default CustomerRatingSection;
