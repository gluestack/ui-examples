import React from "react";
import { HStack, Link, Text } from "../gluestack-ui-components";

const Banner = () => {
  return (
    <HStack
      justifyContent="center"
      alignItems="center"
      space="sm"
      h="$16"
      sx={{
        _light: { bg: "$backgroundLight100" },
        _dark: { bg: "$backgroundDark900" },
      }}
    >
      <Text size="sm">Show total prices up front</Text>
      <Link href="https://hello.com">
        <Text
          sx={{
            _light: { color: "$textLight900" },
            _dark: { color: "$textDark200" },
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
