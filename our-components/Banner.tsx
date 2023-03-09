import React from "react";
import { Box, Center, HStack, Link, Text } from "../components";

const Banner = () => {
  return (
    <HStack
      justifyContent="center"
      alignItems="center"
      space="sm"
      h="$16"
      bg="$borderLight200"
    >
      <Text color="$textLight800" size="sm">
        Show total prices up front
      </Text>
      <Link href="https://hello.com">
        <Text color="$textLight900" fontWeight="$semibold" size="sm">
          Learn more
        </Text>
      </Link>
    </HStack>
  );
};
export default Banner;
