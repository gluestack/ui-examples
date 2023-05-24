import React from "react";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import {
  Alert,
  Box,
  Button,
  Center,
  HStack,
  Icon,
  InfoIcon,
} from "../gluestack-ui-components";
import Banner from "./Banner";
import Header from "./Header";
import MainContent from "./MainContent";
import MobileSidebar from "./MobileSidebar";
import WebSidebar from "./WebSidebar";

const HomestayPage = ({ colorMode, toggleColorMode }: any) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  return (
    <>
      <StatusBar
        style={
          {
            // backgroundColor: colorMode === "light" ? "#E5E5E5" : "#262626",
          }
        }
      />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
        }}
      >
        <Box
          sx={{
            _light: { bg: "white" },
            _dark: { bg: "$backgroundDark950" },
          }}
        >
          <Banner />
          <Header
            colorMode={colorMode}
            toggleColorMode={toggleColorMode}
            setSidebarOpen={setSidebarOpen}
          />
          <Box w="100%">
            <MobileSidebar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
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
    </>
  );
};
export default HomestayPage;
