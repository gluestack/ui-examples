import React, { useRef, useState } from "react";
import {
  Box,
  HStack,
  Image,
  Center,
  Icon,
  Pressable,
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
    <Box w="100%">
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
      <Box
        display="none"
        sx={{
          "@md": {
            display: "flex",
          },
        }}
      >
        <ScrollLeft handleScrollLeft={handleScrollLeft} />
        <ScrollRight handleScrollRight={handleScrollRight} />
      </Box>
    </Box>
  );
};

const ScrollLeft = ({ handleScrollLeft }: any) => {
  return (
    <Center position="absolute" left="$0" h="100%">
      <Pressable
        p="$1"
        ml="$3"
        borderRadius="$full"
        borderColor="$borderLight300"
        borderWidth="$1"
        bg="$backgroundLight50"
        sx={{
          "@md": {
            ml: -16,
          },
          ":hover": {
            bg: "$backgroundLight100",
          },
          _dark: {
            bg: "$backgroundDark900",
            borderColor: "$borderDark600",
            ":hover": {
              bg: "$backgroundDark800",
            },
          },
        }}
        onPress={handleScrollLeft}
      >
        <Icon
          as={ChevronLeft}
          size="lg"
          color="$backgroundLight700"
          sx={{
            _dark: {
              color: "$backgroundDark300",
            },
          }}
        />
      </Pressable>
    </Center>
  );
};

const ScrollRight = ({ handleScrollRight }: any) => {
  return (
    <Center position="absolute" right="$0" h="100%">
      <Pressable
        p="$1"
        mr="$3"
        borderRadius="$full"
        borderColor="$borderLight300"
        borderWidth="$1"
        bg="$backgroundLight50"
        sx={{
          "@md": {
            mr: -16,
          },
          ":hover": {
            bg: "$backgroundLight100",
          },
          _dark: {
            bg: "$backgroundDark900",
            borderColor: "$borderDark600",
            ":hover": {
              bg: "$backgroundDark800",
            },
          },
        }}
        onPress={handleScrollRight}
      >
        <Icon
          as={ChevronRight}
          size="lg"
          color="$backgroundLight700"
          sx={{
            _dark: {
              color: "$backgroundDark300",
            },
          }}
        />
      </Pressable>
    </Center>
  );
};

export default NewThisWeekFold;
