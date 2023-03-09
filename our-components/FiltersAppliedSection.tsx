import React from "react";
import { Badge, Box, Button, HStack, Text, VStack } from "../components";
import { CloseIcon } from "../components/core/Icons/Icons";

const FiltersAppliedSection = ({
  sidebarFiltersChecked,
  setSidebarFiltersChecked,
}: any) => {
  const arr1 = ["Private room", "Wifi", "Air conditioning"];
  return (
    <Box
      borderWidth={1}
      borderColor="$borderLight100"
      borderRadius="$md"
      p="$3"
    >
      <HStack justifyContent="space-between">
        <Text size="sm" fontWeight="$medium" color="black">
          Filters applied
        </Text>
        <Button
          // @ts-ignore
          variant="link"
          p={0}
        >
          <Button.Text
            color="$primary500"
            // @ts-ignore
            fontSize={12}
          >
            Clear all
          </Button.Text>
        </Button>
      </HStack>
      <HStack flexWrap="wrap" space="md">
        {arr1.map((item) => (
          <Badge rounded="$full" px="$3" py="$2.5" action="muted" mt="$3">
            <Badge.Text textTransform="none" color="black">
              {item}
            </Badge.Text>
            <Button
              // @ts-ignore
              ml="$2"
              action="secondary"
              rounded="$full"
              p="$1"
              bg="$backgroundLight400"
            >
              <CloseIcon h="$3" w="$3" color="$backgroundLight100" />
            </Button>
          </Badge>
        ))}
      </HStack>
    </Box>
  );
};
export default FiltersAppliedSection;
