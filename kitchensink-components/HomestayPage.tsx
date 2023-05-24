import React, { useEffect } from "react";
import { SafeAreaView, ScrollView, StatusBar, Platform } from "react-native";
import {
  Alert,
  Box,
  Button,
  Center,
  HStack,
  Icon,
  InfoIcon,
  Pressable,
  Text,
} from "../gluestack-ui-components";
import Banner from "./Banner";
import Header from "./Header";
import MainContent from "./MainContent";
import MobileSidebar from "./MobileSidebar";
import WebSidebar from "./WebSidebar";
import MobileBottomTabs from "./MobileBottomTabs";
import { Heart } from "lucide-react-native";
import { AnimatePresence, Motion } from "@legendapp/motion";

const HomestayPage = ({ colorMode, toggleColorMode }: any) => {
  useEffect(() => {
    if (Platform.OS === "web") {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
    }
  }, []);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [like, setLike] = React.useState(false);
  return (
    <Box flex={1}>
      <StatusBar
        style={
          {
            // backgroundColor: colorMode === "light" ? "#E5E5E5" : "#262626",
          }
        }
      />
      <Box w="100%">
        <Banner />
        <Header
          colorMode={colorMode}
          toggleColorMode={toggleColorMode}
          setSidebarOpen={setSidebarOpen}
        />
      </Box>
      <ScrollView style={{ width: "100%" }}>
        <Box
          w="100%"
          sx={{
            _light: { bg: "white" },
            _dark: { bg: "$backgroundDark950" },
          }}
        >
          <Box w="100%">
            {/* <MobileSidebar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            /> */}
            <HStack
              w="100%"
              px="$5"
              sx={{
                "@md": {
                  px: "$12",
                },
              }}
            >
              <WebSidebar />
              <MainContent />
            </HStack>
          </Box>
        </Box>
      </ScrollView>
      <Box h={100} w="100%">
        <Text>Hello</Text>
      </Box>
      {/* <MobileBottomTabs /> */}
    </Box>
  );
};
export default HomestayPage;
