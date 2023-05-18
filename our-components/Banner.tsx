import React from "react";
import { Alert, HStack, InfoIcon, Link, Text } from "../components";

const Banner = () => {
  return (
    <HStack
      w="$full"
      // justifyContent="center"
      alignItems="center"
      space="sm"
      h="$16"
      borderBottomWidth="$1"
      sx={{
        _light: { bg: "$backgroundLight100", borderColor: "$borderLight200" },
        _dark: { bg: "$backgroundDark800", borderColor: "$backgroundDark800" },
      }}
    >
      <Alert action="info" w="$full">
        <Alert.Icon as={InfoIcon} />
        <Alert.Text>
          Unlock the power of knowledge with the following information. Get
          ready to unleash your inner superhero and change the world!
        </Alert.Text>
      </Alert>
    </HStack>
  );
};
export default Banner;
