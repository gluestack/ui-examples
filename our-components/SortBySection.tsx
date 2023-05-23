import React from "react";
import { Radio, Text, VStack } from "../components";

const SortBySection = () => {
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
    <VStack space="sm">
      <Text fontWeight="$semibold" size="md">
        Sort by
      </Text>
      <Radio.Group value={values} onChange={setValues}>
        {sidebarFiltersCustomerRatings.map((placeType: any) => {
          return (
            <Radio
              value={placeType.value}
              justifyContent="flex-start"
              size="sm"
              my="$2"
              key={placeType.value}
            >
              <Radio.Indicator>
                <Radio.Icon />
              </Radio.Indicator>
              <Radio.Label>{placeType.label}</Radio.Label>
            </Radio>
          );
        })}
      </Radio.Group>
    </VStack>
  );
};
export default SortBySection;
