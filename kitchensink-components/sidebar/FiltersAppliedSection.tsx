import React from "react";
import {
  Badge,
  BadgeText,
  Box,
  Button,
  HStack,
  Icon,
  Pressable,
  Text,
} from "@gluestack-ui/themed";
import { CloseIcon } from "@gluestack-ui/themed";

const FiltersAppliedSection = () => {
  const filters = ["Private room", "Wifi", "Air conditioning"];
  const [appliedFilters, setAppliedFilters]: any = React.useState(filters);
  return (
    <Box
      borderWidth="$1"
      borderRadius="$md"
      p="$4"
      borderColor="$borderLight100"
      sx={{
        _dark: { borderColor: "$borderDark900" },
      }}
    >
      <HStack justifyContent="space-between" alignItems="center">
        <Text size="sm" fontWeight="$medium">
          Filters applied
        </Text>
        <Button
          display={appliedFilters.length === 0 ? "none" : "flex"}
          p={0}
          variant="link"
          size="xs"
          onPress={() => {
            setAppliedFilters([]);
          }}
        >
          <Button.Text>Clear all</Button.Text>
        </Button>
      </HStack>
      <HStack flexWrap="wrap" space="sm">
        {appliedFilters.map((item: any) => (
          <Badge
            rounded="$full"
            px="$2.5"
            py="$2"
            action="muted"
            mt="$3"
            key={item}
            alignItems="center"
          >
            <BadgeText
              textTransform="none"
              color="black"
              sx={{ _dark: { color: "$backgroundDark300" } }}
            >
              {item}
            </BadgeText>
            <Pressable
              ml="$2"
              rounded="$full"
              // p="$1"
              // bg="$backgroundLight400"
              // sx={{
              //   _dark: {
              //     bg: "$backgroundDark800",
              //   },
              // }}
              onPress={() => {
                const newFilters = appliedFilters.filter((item1: any) => {
                  return item1 !== item;
                });
                setAppliedFilters(newFilters);
              }}
            >
              <Icon
                as={CloseIcon}
                size="sm"
                color="$backgroundLight600"
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
