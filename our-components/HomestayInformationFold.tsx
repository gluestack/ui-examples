import React from "react";

import {
  Box,
  Button,
  HStack,
  // IconButton,
  Image,
  Pressable,
  Tabs,
  Text,
  Tooltip,
  VStack,
} from "../components";
// import { HeartIcon } from "../components/core/Icons/Icons/Heart";
// import { StarIcon } from "../components/core/Icons/Icons/Star";
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
    <Box>
      <HomestayInfoTabs
        homestayInfoData={homestayInfoData}
        tabsData={tabsData}
      />
    </Box>
  );
};

const HomestayInfoTabs = ({ tabsData }: any) => {
  return (
    <Box py="$6">
      <Tabs w="$full" value="Tropical">
        <Tabs.TabList>
          {tabsData.map((tab: any) => {
            return (
              <Tabs.Tab value={tab.title}>
                <Tabs.TabTitle>{tab.title}</Tabs.TabTitle>
              </Tabs.Tab>
            );
          })}
        </Tabs.TabList>
        <Tabs.TabPanels mt="$4">
          {tabsData.map((tab: any) => {
            return (
              <Tabs.TabPanel value={tab.title}>
                <TabPanelData />
              </Tabs.TabPanel>
            );
          })}
        </Tabs.TabPanels>
      </Tabs>
    </Box>
  );
};

const TabPanelData = () => {
  return (
    <HStack justifyContent="space-between" flexWrap="wrap" space="md">
      {homestayInfoData.map((image: any) => {
        return (
          <VStack flex={1}>
            <Box>
              <Image
                source={image.src}
                h="$72"
                w="100%"
                // @ts-ignore
                borderRadius="$xl"
              />
              <Button position="absolute" top="$3" right="$4">
                {/* <HeartIcon color="black" opacity={0.5} /> */}
              </Button>
            </Box>
            <VStack space="$sm" py="$2" px="$1">
              <HStack justifyContent="space-between" alignItems="center">
                <Text
                  fontWeight="$semibold"
                  sx={{
                    _light: { color: "$textLight900" },
                    _dark: { color: "$textDark200" },
                  }}
                >
                  {image.title}
                </Text>
                <HStack alignItems="center">
                  <Tooltip
                    trigger={(triggerProps: any) => {
                      return (
                        <Pressable {...triggerProps}>
                          {/* <StarIcon
                            {...triggerProps}
                            h="$3"
                            w="$3"
                            sx={{
                              _dark: { color: "$backgroundDark50" },
                              _light: { color: "black" },
                            }}
                          /> */}
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
                          fontSize: 12,
                        }}
                      >
                        Ratings
                      </Text>
                    </Tooltip.Content>
                  </Tooltip>

                  <Text
                    pl="$1"
                    fontSize="$sm"
                    sx={{
                      _light: { color: "$textLight900" },
                      _dark: { color: "$textDark200" },
                    }}
                  >
                    {image.rating}
                  </Text>
                </HStack>
              </HStack>
              <Text
                fontSize="$sm"
                sx={{
                  _light: { color: "$textLight500" },
                  _dark: { color: "$textDark500" },
                }}
              >
                {image.location}
              </Text>
              <HStack>
                <Text
                  fontSize="$sm"
                  fontWeight="$semibold"
                  sx={{
                    _light: { color: "$textLight900" },
                    _dark: { color: "$textDark200" },
                  }}
                >
                  {image.price}
                </Text>
                <Text
                  fontSize="$sm"
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
          </VStack>
        );
      })}
    </HStack>
  );
};
export default HomestayInformationFold;
