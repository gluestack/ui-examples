import React from "react";
import {
  Checkbox,
  HStack,
  Heading,
  Icon,
  Text,
  VStack,
} from "../gluestack-ui-components";
import { CheckIcon } from "../gluestack-ui-components/core/Icons/Icons";
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
      <Checkbox.Group value={values} onChange={setValues}>
        {sidebarFiltersCustomerRatings.map((placeType: any, index: any) => {
          return (
            <Checkbox value={placeType.value} size="sm" my="$2" key={index}>
              <Checkbox.Indicator>
                <Checkbox.Icon>
                  <CheckIcon />
                </Checkbox.Icon>
              </Checkbox.Indicator>
              <Checkbox.Label>
                <Icon
                  as={Star}
                  size="sm"
                  color="$black"
                  sx={{ _dark: { color: "$white" } }}
                  fill="currentColor"
                />{" "}
                {placeType.label}
              </Checkbox.Label>
            </Checkbox>
          );
        })}
      </Checkbox.Group>
    </VStack>
  );
};
export default CustomerRatingSection;
