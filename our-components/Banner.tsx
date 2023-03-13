import React from "react";
import { HStack, Link, Text } from "../components";

const Banner = () => {
  return (
    <HStack
      justifyContent="center"
      alignItems="center"
      space="sm"
      h="$16"
      sx={{
        _light: { bg: "$backgroundLight100" },
        _dark: { bg: "$backgroundDark800" },
      }}
    >
      <Text color="$textLight800" size="sm">
        Show total prices up front
      </Text>
      <Link href="https://hello.com">
        <Text
          sx={{
            _light: { color: "$textLight900" },
            _dark: { color: "$textDark100" },
          }}
          fontWeight="$semibold"
          size="sm"
        >
          Learn more
        </Text>
      </Link>
    </HStack>
  );
};
export default Banner;
