import React from "react";
import {
  Checkbox,
  CheckboxGroup,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  Heading,
  Icon,
  VStack,
} from "@gluestack-ui/themed";
import { CheckIcon } from "@gluestack-ui/themed";
import { Star } from "lucide-react-native";

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
      <Heading size="sm">Customer Ratings</Heading>
      <CheckboxGroup
        value={values}
        onChange={setValues}
        accessibilityLabel="rating"
      >
        {sidebarFiltersCustomerRatings.map((placeType: any, index: any) => {
          return (
            <Checkbox
              value={placeType.value}
              size="sm"
              my="$2"
              key={index}
              accessibilityLabel={placeType.value}
            >
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel ml="$2">
                <Icon
                  as={Star}
                  size={12}
                  color="$black"
                  sx={{ _dark: { color: "$white" } }}
                  fill="currentColor"
                />{" "}
                {placeType.label}
              </CheckboxLabel>
            </Checkbox>
          );
        })}
      </CheckboxGroup>
    </VStack>
  );
};
export default CustomerRatingSection;
