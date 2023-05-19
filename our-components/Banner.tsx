import React from "react";
import { Alert, HStack, InfoIcon, Link, Text } from "../components";

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
    // <HStack
    //   w="$full"
    //   alignItems="center"
    //   space="sm"
    //   // h="$16"
    //   borderBottomWidth="$1"
    //   sx={{
    //     _light: { bg: "$backgroundLight100", borderColor: "$borderLight200" },
    //     _dark: { bg: "$backgroundDark800", borderColor: "$backgroundDark800" },
    //   }}
    // >
    //   <Alert action="info" w="$full">
    //     <Alert.Icon as={InfoIcon} />
    //     <Alert.Text>
    //       Unlock the power of knowledge with the following information. Get
    //       ready to unleash your inner superhero and change the world!
    //     </Alert.Text>
    //   </Alert>
    // </HStack>
  );
};
export default Banner;
