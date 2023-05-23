import React from "react";
import {
  Badge,
  Box,
  Button,
  HStack,
  Icon,
  Menu,
  Pressable,
  Text,
  VStack,
} from "../components";
import { CloseIcon } from "../components/core/Icons/Icons";

const FiltersAppliedSection = ({
  sidebarFiltersChecked,
  setSidebarFiltersChecked,
}: any) => {
  const arr1 = ["Private room", "Wifi", "Air conditioning"];
  return (
    <Box
      borderWidth="$1"
      borderRadius="$md"
      p="$3"
      sx={{
        _light: { borderColor: "$borderLight100" },
        _dark: { borderColor: "$borderDark900" },
      }}
    >
      <HStack justifyContent="space-between">
        <Text size="sm" fontWeight="$medium">
          Filters applied
        </Text>
        <Button p={0} variant="link" size="xs">
          <Button.Text>Clear all</Button.Text>
        </Button>
      </HStack>
      <HStack flexWrap="wrap" space="sm">
        {arr1.map((item) => (
          <Badge
            rounded="$full"
            px="$2.5"
            py="$2"
            action="muted"
            mt="$2"
            key={item}
          >
            <Badge.Text
              textTransform="none"
              color="black"
              sx={{ _dark: { color: "$backgroundDark300" } }}
            >
              {item}
            </Badge.Text>
            <Pressable
              ml="$2"
              rounded="$full"
              p="$1"
              bg="$backgroundLight400"
              sx={{
                _dark: {
                  bg: "$backgroundDark800",
                },
              }}
            >
              <Icon
                as={CloseIcon}
                size="xs"
                color="$backgroundLight100"
                sx={{
                  _dark: { color: "$backgroundDark300" },
                }}
              />
            </Pressable>
          </Badge>
        ))}
      </HStack>
    </Box>
  );
};
export default FiltersAppliedSection;
