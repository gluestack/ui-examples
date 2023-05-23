import React from "react";

import {
  Box,
  Button,
  HStack,
  Icon,
  Image,
  Pressable,
  Tabs,
  Text,
  Tooltip,
  VStack,
} from "../components";
import { Heart, Star } from "lucide-react-native";

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
    <VStack>
      <HomestayInfo homestayInfoData={homestayInfoData} tabsData={tabsData} />
    </VStack>
  );
};

const HomestayInfo = ({ homestayInfoData, tabsData }: any) => {
  return (
    <Box pb="$8">
      <HomestayInfoTabs
        homestayInfoData={homestayInfoData}
        tabsData={tabsData}
      />
      <TabPanelData />
    </Box>
  );
};

const HomestayInfoTabs = ({ tabsData }: any) => {
  const [activeTab, setActiveTab] = React.useState(tabsData[0]);
  return (
    <Box py="$6">
      <HStack space="lg">
        {tabsData.map((tab: any) => {
          return (
            <Pressable
              pb="$2"
              borderBottomWidth={activeTab === tab ? 3 : 0}
              borderColor="$borderLight900"
              sx={{
                ":hover": {
                  borderBottomWidth: 3,
                  borderColor:
                    activeTab === tab ? "$borderLight900" : "$borderLight200",
                },
                _dark: {
                  borderColor: "$borderLight100",
                  ":hover": {
                    borderColor:
                      activeTab === tab ? "$borderLight100" : "$borderDark700",
                  },
                },
              }}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                size="sm"
                color={activeTab === tab ? "$textLight900" : "$textLight700"}
                sx={{
                  _dark: {
                    color: activeTab === tab ? "$textDark100" : "$textDark300",
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
    </Box>
  );
};

const TabPanelData = () => {
  const [likes, setLikes]: any = React.useState([]);
  return (
    <HStack justifyContent="space-between" flexWrap="wrap" space="md">
      {homestayInfoData.map((image: any, index: any) => {
        return (
          <VStack flex={1} key={index}>
            <Box>
              <Image
                source={image.src}
                h="$72"
                w="100%"
                // @ts-ignore
                borderRadius="$xl"
              />
              <Pressable
                position="absolute"
                top="$3"
                right="$4"
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
              >
                <Icon
                  as={Heart}
                  size="lg"
                  color={likes.includes(image.title) ? "red" : "white"}
                  fill={likes.includes(image.title) ? "red" : "gray"}
                />
              </Pressable>
            </Box>
            <HStack justifyContent="space-between" py="$2" px="$1">
              <VStack space="$sm" flex={1}>
                <Text
                  fontWeight="$semibold"
                  sx={{
                    _light: { color: "$textLight900" },
                    _dark: { color: "$textDark200" },
                  }}
                >
                  {image.title}
                </Text>
                <Text
                  size="sm"
                  sx={{
                    _light: { color: "$textLight500" },
                    _dark: { color: "$textDark500" },
                  }}
                >
                  {image.location}
                </Text>
                <HStack>
                  <Text
                    size="sm"
                    fontWeight="$semibold"
                    sx={{
                      _light: { color: "$textLight900" },
                      _dark: { color: "$textDark200" },
                    }}
                  >
                    {image.price}
                  </Text>
                  <Text
                    size="sm"
                    pl="$1"
                    sx={{
                      _light: { color: "$black" },
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
                          size="xs"
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
          </VStack>
        );
      })}
    </HStack>
  );
};
export default HomestayInformationFold;
