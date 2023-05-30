import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  HStack,
  Image,
  Center,
  Icon,
} from "../gluestack-ui-components";
import { ScrollView } from "react-native";
import { ChevronLeft, ChevronRight, Scroll } from "lucide-react-native";
// import { LinearGradient } from "expo-linear-gradient";

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
  const scrollViewRef = useRef(null);
  const scrollAmount = 400;
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollLeft = () => {
    const newScrollPosition = scrollPosition - scrollAmount;
    if (scrollViewRef.current) {
      // @ts-ignore
      scrollViewRef?.current?.scrollTo({
        x: newScrollPosition,
        animated: true,
      });
      setScrollPosition(newScrollPosition);
    }
  };

  const handleScrollRight = () => {
    const newScrollPosition = scrollPosition + scrollAmount;
    if (scrollViewRef.current)
      // @ts-ignore
      scrollViewRef?.current?.scrollTo({
        x: newScrollPosition,
        animated: true,
      });
    setScrollPosition(newScrollPosition);
  };

  return (
    <Box px="$5" w="100%">
      <ScrollView
        horizontal
        style={{ width: "100%" }}
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}
      >
        <HStack space="md" width="100%">
          {data.map((image, index) => {
            return (
              <Box key={index} flex={1}>
                <Image
                  source={image.src}
                  alt={"place" + index}
                  h="$64"
                  w="$64"
                  // @ts-ignore
                  borderRadius="$lg"
                  resizeMode="cover"
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
      <Center position="absolute" left="$0" h="100%">
        <Button
          action="secondary"
          variant="outline"
          px="$1"
          py="$1"
          ml={6}
          borderRadius="$full"
          onPress={handleScrollLeft}
        >
          <Icon as={ChevronLeft} size="lg" color="$secondary200" />
        </Button>
      </Center>
      <Center position="absolute" right="$0" h="100%">
        <Button
          action="secondary"
          variant="outline"
          px="$1"
          py="$1"
          mr={6}
          borderRadius="$full"
          onPress={handleScrollRight}
        >
          <Icon as={ChevronRight} size="lg" color="$secondary200" />
        </Button>
      </Center>
    </Box>
  );
};

export default NewThisWeekFold;
