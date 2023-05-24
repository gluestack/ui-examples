import React from "react";
import {
  Checkbox,
  HStack,
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
      <Text fontWeight="$semibold" size="md">
        Customer Ratings
      </Text>
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
                <HStack alignItems="center" space="xs">
                  <Icon
                    as={Star}
                    size="sm"
                    color="$black"
                    sx={{ _dark: { color: "$white" } }}
                    fill="currentColor"
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
