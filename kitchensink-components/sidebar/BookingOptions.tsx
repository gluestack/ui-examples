import React from "react";
import {
  HStack,
  Heading,
  Switch,
  Text,
  VStack,
} from "../../components";

const BookingOptions = () => {
  const [selfCheckIn, setSelfCheckIn] = React.useState(false);
  const [mealsIncluded, setMealsIncluded] = React.useState(false);

  return (
    <VStack space="md">
      <Heading size="sm">Booking Options</Heading>
      <VStack className="w-full">
        <HStack space="lg" className='w-full'>
          <VStack className="flex-1">
            <Text
              size="sm"
              className="text-typography-900"
            >
              Self check-in
            </Text>
            <Text size="xs" className="text-typography-500">
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
      <VStack className="w-full">
        <HStack space="lg" w="100%">
          <VStack className="flex-1">
            <Text
              size="sm"
              className="text-typography-900"
            >
              Meals included
            </Text>
            <Text size="xs" className="text-typography-500">
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
