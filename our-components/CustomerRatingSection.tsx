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
    <Box>
      <Text fontWeight="$semibold" fontSize="$md">
        Customer Ratings
      </Text>
      <Checkbox.Group value={values} onChange={setValues}>
        {sidebarFiltersCustomerRatings.map((placeType: any) => {
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
              <Checkbox.Label>
                <HStack alignItems="center" space="xs">
                  <StarIcon w="$3" h="$3" color="black" />
                  <Text>{placeType.label}</Text>
                </HStack>
              </Checkbox.Label>
            </Checkbox>
          );
        })}
      </Checkbox.Group>
    </Box>
  );
};
export default CustomerRatingSection;
