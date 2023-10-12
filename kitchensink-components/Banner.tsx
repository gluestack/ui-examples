import React from "react";
import { HStack, Link, LinkText, Text } from "@gluestack-ui/themed";

const Banner = () => {
  return (
    <HStack
      justifyContent="center"
      alignItems="center"
      space="sm"
      h="$16"
      sx={{
        _light: { bg: "$backgroundLight900" },
        _dark: { bg: "$backgroundDark800" },
      }}
    >
      <Text
        size="sm"
        color="$textLight0"
        sx={{
          _dark: { color: "$textLight0" },
        }}
      >
        Show total prices up front
      </Text>
      <Link href="https://ui.gluestack.io">
        <LinkText
          color="$textLight0"
          sx={{
            _dark: { color: "$textDark200" },
          }}
          fontWeight="$semibold"
          size="sm"
        >
          Learn more
        </LinkText>
      </Link>
    </HStack>
  );
};
export default Banner;
