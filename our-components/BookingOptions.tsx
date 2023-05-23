import React from "react";
import { Box, HStack, Switch, Text, VStack } from "../components";

const BookingOptions = () => {
  const [selfCheckIn, setSelfCheckIn] = React.useState(false);
  const [mealsIncluded, setMealsIncluded] = React.useState(false);

  return (
    <VStack space="md">
      <Text fontWeight="$semibold" size="md">
        Booking Options
      </Text>
      <VStack w="100%">
        <HStack space="lg" w="100%">
          <VStack flex={1}>
            <Text size="sm">Self check-in</Text>
            <Text size="xs" color="$textLight500">
              Access a place without needing the Host
            </Text>
          </VStack>
          <Switch
            size="sm"
            value={selfCheckIn}
            onValueChange={(val: any) => setSelfCheckIn(val)}
          />
        </HStack>
      </VStack>
      <VStack w="100%">
        <HStack space="lg" w="100%">
          <VStack flex={1}>
            <Text size="sm">Meals included</Text>
            <Text size="xs" color="$textLight500">
              Have a prefered meal for your comfy stay
            </Text>
          </VStack>
          <Switch
            size="sm"
            value={mealsIncluded}
            onValueChange={(val: any) => setMealsIncluded(val)}
          />
        </HStack>
      </VStack>
    </VStack>
  );
};
export default BookingOptions;
