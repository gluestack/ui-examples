import React from "react";
import {
  Box,
  Checkbox,
  HStack,
  Radio,
  Switch,
  Text,
  VStack,
} from "../components";
import { CheckIcon } from "../components/core/Icons/Icons";
import { StarIcon } from "../components/core/Icons/Icons/Star";

const CustomerRatingSection = () => {
  const sidebarFiltersCustomerRatings = [
    {
      label: "Top ratings",
      value: "Top ratings",
    },
    {
      label: "Best price",
      value: "Best price",
    },
    {
      label: "Discount",
      value: "Discount",
    },
    {
      label: "What’s new",
      value: "What’s new",
    },
  ];
  const [values, setValues] = React.useState("Top ratings");

  return (
    <Box>
      <Text fontWeight="$semibold" fontSize="$md">
        Customer Ratings
      </Text>
      <Radio.Group value={values} onChange={setValues}>
        {sidebarFiltersCustomerRatings.map((placeType: any) => {
          return (
            <Radio
              value={placeType.value}
              justifyContent="flex-start"
              size="sm"
            >
              <Radio.Indicator>
                <Radio.Icon />
              </Radio.Indicator>
              <Radio.Label>{placeType.label}</Radio.Label>
            </Radio>
          );
        })}
      </Radio.Group>
    </Box>
  );
};
export default CustomerRatingSection;
