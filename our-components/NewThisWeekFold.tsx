import React from "react";
import { Box, Button, HStack, Image, Center, Icon } from "../components";
import { ScrollView } from "react-native";
import { ChevronRight } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";

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
  {
    src: require("../assets/display/image1.png"),
  },
  {
    src: require("../assets/display/image2.png"),
  },
];

const NewThisWeekFold = () => {
  return (
    <Box>
      <ScrollView
        horizontal
        style={{ width: "100%" }}
        contentContainerStyle={{ width: "100%" }}
        showsHorizontalScrollIndicator={false}
      >
        <HStack space="md" width="100%">
          {data.map((image) => {
            return (
              <Box width="30%" h="$48" key={image.src}>
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
          {/* <LinearGradient
            colors={["transparent", "rgba(0, 0, 0, 0.9)"]} // Adjust the opacity as needed
            style={{
              zIndex: -1,
              position: "absolute",
              right: 0,
              height: 192,
              width: "50%",
            }}
          /> */}
        </HStack>
      </ScrollView>

      <Center position="absolute" right="$0" h="100%">
        <Button
          action="secondary"
          variant="outline"
          px="$1"
          py="$1"
          mr={-12}
          borderRadius="$full"
        >
          <Icon as={ChevronRight} size="lg" color="white" />
        </Button>
      </Center>
    </Box>
  );
};

export default NewThisWeekFold;
