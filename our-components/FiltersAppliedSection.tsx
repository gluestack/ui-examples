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
      borderRadius="$md"
      p="$3"
      sx={{
        _light: { borderColor: "$borderLight200" },
        _dark: { borderColor: "$borderDark700" },
      }}
    >
      <HStack justifyContent="space-between">
        <Text size="sm" fontWeight="$medium" color="black">
          Filters applied
        </Text>
        <Button p={0} variant="link" size="sm">
          <Button.Text>Clear all</Button.Text>
        </Button>
      </HStack>
      <HStack flexWrap="wrap" space="sm">
        {arr1.map((item) => (
          <Badge rounded="$full" px="$2.5" py="$2" action="muted" mt="$2">
            <Badge.Text textTransform="none" color="black">
              {item}
            </Badge.Text>
            <Button
              // @ts-ignore
              ml="$2"
              // action="secondary"
              rounded="$full"
              p="$1"
              bg="$backgroundLight400"
            >
              <CloseIcon
                h="$3"
                w="$3"
                color="$backgroundLight100"
                sx={{
                  _dark: { color: "black" },
                }}
              />
            </Button>
          </Badge>
        ))}
      </HStack>
    </Box>
  );
};
export default FiltersAppliedSection;
