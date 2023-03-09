import React from "react";
import { Box, HStack, Switch, Text, VStack } from "../components";

const BookingOptions = () => {
  const [selfCheckIn, setSelfCheckIn] = React.useState(false);
  const [mealsIncluded, setMealsIncluded] = React.useState(false);

  return (
    <Box w="100%">
      <VStack w="100%">
        <HStack space="lg" w="100%">
          <VStack flex={1}>
            <Text fontSize="$md" color="$textLight900">
              Self check-in
            </Text>
            <Text fontSize="$md" color="$textLight500">
              Access a place without needing the Host
            </Text>
          </VStack>
          <Switch
            value={selfCheckIn}
            onValueChange={(val: any) => setSelfCheckIn(val)}
          />
        </HStack>
      </VStack>
      <VStack w="100%">
        <HStack space="lg" w="100%">
          <VStack flex={1}>
            <Text fontSize="$md" color="$textLight900">
              Meals included
            </Text>
            <Text fontSize="$md" color="$textLight500">
              Have a prefered meal for your comfy stay
            </Text>
          </VStack>
          <Switch
            value={mealsIncluded}
            onValueChange={(val: any) => setMealsIncluded(val)}
          />
        </HStack>
      </VStack>
    </Box>
  );
};
export default BookingOptions;
