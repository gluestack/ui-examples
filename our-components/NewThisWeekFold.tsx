import React from "react";
import { Box, HStack, Image } from "../components";

const data = [
  {
    src: require("../assets/display/image1.png"),
  },
  {
    src: require("../assets/display/image2.png"),
  },
  {
    src: require("../assets/display/image3.png"),
  },
];

const NewThisWeekFold = () => {
  return (
    <HStack justifyContent="space-between" flexWrap="wrap" space="md">
      {data.map((image: any) => {
        return (
          <Box flex={1}>
            <Image
              source={image.src}
              h="$48"
              w="100%"
              // @ts-ignore
              borderRadius="$lg"
            />
          </Box>
        );
      })}
    </HStack>
  );
};

export default NewThisWeekFold;
