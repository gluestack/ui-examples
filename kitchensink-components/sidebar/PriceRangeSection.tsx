import React from "react";
import {
  Checkbox,
  Slider,
  Text,
  Tooltip,
  VStack,
  Heading,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  CheckboxIndicator,
  CheckboxLabel,
  CheckIcon,
  CheckboxIcon,
} from "@gluestack-ui/themed";

const PriceRangeSection = () => {
  const [sliderValue, setSliderValue] = React.useState(3500);
  const [values, setValues] = React.useState(["entirePlace"]);
  const handleChange = (value: any) => {
    setSliderValue(value);
  };

  const sidebarFiltersPriceRange = [
    {
      label: "below ₹2001",
      value: "below ₹2001",
    },
    {
      label: "₹2001 - ₹3000",
      value: "₹2001 - ₹3000",
    },
    {
      label: "₹3001 - ₹4001",
      value: "₹3001 - ₹4001",
    },
    {
      label: "above ₹3001",
      value: "above ₹3001",
    },
  ];

  return (
    <VStack space="md">
      <Heading size="sm">Price Range</Heading>
      <Slider
        minValue={800}
        maxValue={5000}
        w="100%"
        size="sm"
        value={sliderValue}
        onChange={(value: any) => {
          handleChange(value);
        }}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          pointerEvents={"none"}
          placement="bottom"
          trigger={(triggerProps: any) => {
            return <SliderThumb {...triggerProps} pointerEvents={"auto"} />;
          }}
        >
          <Tooltip.Content>
            <Text color="$white">₹{sliderValue}</Text>
          </Tooltip.Content>
        </Tooltip>
      </Slider>
      <Checkbox.Group
        value={values}
        onChange={setValues}
        mt="$3"
        accessibilityLabel="price filter"
      >
        {sidebarFiltersPriceRange.map((priceRange: any) => {
          return (
            <Checkbox
              value={priceRange.value}
              size="sm"
              my="$2"
              key={priceRange.value}
              accessibilityLabel={priceRange.value}
            >
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel ml="$2">{priceRange.label}</CheckboxLabel>
            </Checkbox>
          );
        })}
      </Checkbox.Group>
    </VStack>
  );
};
export default PriceRangeSection;
