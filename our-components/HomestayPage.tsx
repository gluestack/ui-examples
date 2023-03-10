import React from "react";
import { ScrollView } from "react-native";
import { Box, HStack } from "../components";
import Banner from "./Banner";
import Header from "./Header";
import MainContent from "./MainContent";
import MobileSidebar from "./MobileSidebar";
import WebSidebar from "./WebSidebar";

const HomestayPage = ({ colorMode, toggleColorMode }: any) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  return (
    <ScrollView>
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
            px="$12"
            sx={{
              "@base": {
                px: "$5",
              },
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
  );
};
export default HomestayPage;
