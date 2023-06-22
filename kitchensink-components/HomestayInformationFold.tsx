import React from "react";

import {
  Box,
  HStack,
  Icon,
  Image,
  Pressable,
  Text,
  Tooltip,
  VStack,
} from "../gluestack-ui-components";
import { Heart, Star } from "lucide-react-native";
import { AnimatePresence, Motion } from "@legendapp/motion";
import { ScrollView } from "react-native";

const homestayInfoData = [
  {
    title: "ImageView Inn",
    src: require("../assets/display/image4.png"),
    location: "401 Platte River Rd, Gothenburg, United States",
    price: "$1,481",
    rating: 4.9,
  },
  {
    title: "Spinner Resort",
    src: require("../assets/display/image5.png"),
    location: "1502 Silica Ave, Sacramento California",
    price: "$1,381",
    rating: 4.89,
  },
  {
    title: "DropDown Den",
    src: require("../assets/display/image6.png"),
    location: "2945 Entry Point Blvd, Kissimmee, Florida",
    price: "$2,481",
    rating: 4.6,
  },
];

const tabsData = [
  {
    title: "Tropical",
  },
  {
    title: "Amazing views",
  },
  {
    title: "Caves",
  },
  {
    title: "Mansions",
  },
  {
    title: "Amazing pools",
  },
  {
    title: "Cabins",
  },
  {
    title: "Beachfront",
  },
  {
    title: "Countryside",
  },
  {
    title: "Tiny homes",
  },
  {
    title: "National parks",
  },
];

const HomestayInformationFold = () => {
  return (
    <Box pb="$8" px="$4" sx={{ "@md": { px: 0 } }}>
      <HomestayInfoTabs tabsData={tabsData} />
      <TabPanelData />
    </Box>
  );
};

const HomestayInfoTabs = ({ tabsData }: any) => {
  const [activeTab, setActiveTab] = React.useState(tabsData[0]);
  return (
    <Box
      borderBottomWidth={1}
      borderColor="$borderLight50"
      sx={{
        "@md": { borderColor: "transparent", borderBottomWidth: 0 },
        _dark: { borderColor: "$borderDark900" },
      }}
    >
      <Box py="$5">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <HStack space="lg">
            {tabsData.map((tab: any) => {
              return (
                <Pressable
                  key={tab.title}
                  pb="$2"
                  borderBottomWidth={activeTab === tab ? 3 : 0}
                  borderColor="$borderLight900"
                  sx={{
                    ":hover": {
                      borderBottomWidth: 3,
                      borderColor:
                        activeTab === tab
                          ? "$borderLight900"
                          : "$borderLight200",
                    },
                    _dark: {
                      borderColor: "$borderDark100",
                      ":hover": {
                        borderColor:
                          activeTab === tab
                            ? "$borderDark100"
                            : "$borderDark700",
                      },
                    },
                  }}
                  onPress={() => setActiveTab(tab)}
                >
                  <Text
                    size="sm"
                    color={
                      activeTab === tab ? "$textLight900" : "$textLight600"
                    }
                    sx={{
                      _dark: {
                        color:
                          activeTab === tab ? "$textDark50" : "$textDark400",
                      },
                    }}
                    fontWeight="$medium"
                  >
                    {tab.title}
                  </Text>
                </Pressable>
              );
            })}
          </HStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

const TabPanelData = () => {
  const [likes, setLikes]: any = React.useState([]);
  return (
    <VStack
      justifyContent="space-between"
      sx={{
        "@lg": {
          flexDirection: "row",
        },
      }}
    >
      {homestayInfoData.map((image: any, index: any) => {
        return (
          <Pressable
            flex={1}
            key={index}
            my="$2"
            sx={{
              "@lg": {
                ml: index === 0 ? "$0" : "$2",
                mr: index === homestayInfoData.length - 1 ? "$0" : "$2",
                my: "$0",
              },
              ":hover": {
                transform: [{ scale: 1.5 }],
              },
            }}
          >
            <Image
              source={image.src}
              h="$72"
              w="100%"
              // @ts-ignore
              borderRadius="$xl"
            />
            <Pressable
              onPress={() => {
                if (likes.includes(image.title)) {
                  const newLikes = likes.filter(
                    (like: any) => like !== image.title
                  );
                  setLikes(newLikes);
                  return;
                } else {
                  setLikes([...likes, image.title]);
                }
              }}
              position="absolute"
              top={12}
              right={36}
            >
              <AnimatePresence>
                <Motion.View
                  key={likes.includes(image.title) ? "liked" : "unliked"}
                  initial={{
                    scale: 1.3,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  exit={{
                    scale: 0.9,
                  }}
                  transition={{
                    type: "spring",
                    mass: 0.9,
                    damping: 9,
                    stiffness: 300,
                  }}
                  style={{
                    position: "absolute",
                  }}
                >
                  <Icon
                    as={Heart}
                    size="lg"
                    color={
                      likes.includes(image.title) === true ? "red" : "white"
                    }
                    fill={likes.includes(image.title) === true ? "red" : "gray"}
                  />
                </Motion.View>
              </AnimatePresence>
            </Pressable>
            <HStack justifyContent="space-between" py="$2">
              <VStack space="$sm" flex={1}>
                <Text
                  fontWeight="$semibold"
                  color="$textLight900"
                  sx={{
                    _dark: { color: "$textDark200" },
                  }}
                >
                  {image.title}
                </Text>
                <Text
                  size="sm"
                  color="$textLight500"
                  sx={{
                    _dark: { color: "$textDark500" },
                  }}
                >
                  {image.location}
                </Text>
                <HStack>
                  <Text
                    size="sm"
                    fontWeight="$semibold"
                    color="$textLight900"
                    sx={{
                      _dark: { color: "$textDark200" },
                    }}
                  >
                    {image.price}
                  </Text>
                  <Text
                    size="sm"
                    pl="$1"
                    color="$textLight900"
                    sx={{
                      _dark: { color: "$textDark200" },
                    }}
                  >
                    night
                  </Text>
                </HStack>
              </VStack>
              <Tooltip
                trigger={(triggerProps: any) => {
                  return (
                    <Pressable {...triggerProps}>
                      <HStack alignItems="center">
                        <Icon
                          as={Star}
                          size={12}
                          fill="currentColor"
                          sx={{
                            _dark: { color: "$backgroundDark50" },
                            _light: { color: "black" },
                          }}
                        />
                        <Text
                          pl="$1"
                          size="sm"
                          sx={{
                            _light: { color: "$textLight900" },
                            _dark: { color: "$textDark200" },
                          }}
                        >
                          {image.rating}
                        </Text>
                      </HStack>
                    </Pressable>
                  );
                }}
              >
                <Tooltip.Content>
                  <Text
                    sx={{
                      color: "$white",
                      px: "$2",
                      py: "$1",
                    }}
                  >
                    Ratings
                  </Text>
                </Tooltip.Content>
              </Tooltip>
            </HStack>
          </Pressable>
        );
      })}
    </VStack>
  );
};
export default HomestayInformationFold;
