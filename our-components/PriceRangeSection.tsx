import React from "react";

import {
  Box,
  Button,
  Checkbox,
  HStack,
  Slider,
  Text,
  Tooltip,
  VStack,
} from "../components";
import { CheckIcon } from "../components/core/Icons/Icons";

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
      <Text fontWeight="$semibold" fontSize="$md" color="$textLight900">
        Price Range
      </Text>
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
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Tooltip
          placement="bottom"
          trigger={(triggerProps: any) => {
            return <Slider.Thumb {...triggerProps} />;
          }}
        >
          <Tooltip.Content>
            <Text
              sx={{
                color: "$white",
                px: "$2",
                py: "$1",
                fontSize: 12,
              }}
            >
              {sliderValue}
            </Text>
          </Tooltip.Content>
        </Tooltip>
      </Slider>
      <Checkbox.Group value={values} onChange={setValues} mt="$3">
        {sidebarFiltersPriceRange.map((priceRange: any) => {
          return (
            <Checkbox value={priceRange.value} size="sm" my="$2">
              <Checkbox.Indicator>
                <Checkbox.Icon>
                  <CheckIcon />
                </Checkbox.Icon>
              </Checkbox.Indicator>
              <Checkbox.Label>{priceRange.label}</Checkbox.Label>
            </Checkbox>
          );
        })}
      </Checkbox.Group>
    </VStack>
  );
};
export default PriceRangeSection;
