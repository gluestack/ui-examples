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
  CloseIcon,
  ButtonText,
} from "../../components";

const FiltersAppliedSection = () => {
  const filters = ["Private room", "Wifi", "Air conditioning"];
  const [appliedFilters, setAppliedFilters]: any = React.useState(filters);
  return (
    <Box className="border rounded-md p-4 border-outline-100">
      <HStack className="justify-between items-center">
        <Text size="sm" className="font-medium">
          Filters applied
        </Text>
        <Button
          variant="link"
          size="sm"
          onPress={() => {
            setAppliedFilters([]);
          }}
          className={`${appliedFilters.length === 0 ? "hidden" : "flex"} p-0`}
        >
          <ButtonText>Clear all</ButtonText>
        </Button>
      </HStack>
      <HStack flexWrap="wrap" space="sm">
        {appliedFilters.map((item: any) => (
          <Badge
            action="muted"
            key={item}
            className="rounded-full px-2.5 py-2 mt-3 items-center"
          >
            <BadgeText className="normal-case text-background-300">
              {item}
            </BadgeText>
            <Pressable
              className="ml-2 rounded-full"
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
                className='text-background-600'
              />
            </Pressable>
          </Badge>
        ))}
      </HStack>
    </Box>
  );
};
export default FiltersAppliedSection;
