import React from "react";
import { Box, HStack } from "../gluestack-ui-components";
import Banner from "./Banner";
import Header from "./Header";
import WebSidebar from "./WebSidebar";
import MainContent from "./MainContent";
import { ScrollView } from "react-native";

const Explorepage = ({
  colorMode,
  toggleColorMode,
  setSidebarDrawerOpen,
}: any) => {
  return (
    <>
      <Box w="100%">
        {/* top banner */}
        <Banner />
        {/* header */}
        <Header
          colorMode={colorMode}
          toggleColorMode={toggleColorMode}
          setSidebarDrawerOpen={setSidebarDrawerOpen}
        />
      </Box>
      {/* explore page content for small screen */}
      <ScrollView style={{ flex: 1 }}>
        <Box sx={{ "@md": { display: "none" } }}>
          <MainContent />
        </Box>
      </ScrollView>

      {/* explore page content for large screen */}
      <HStack w="100%" display="none" sx={{ "@md": { display: "flex" } }}>
        {/* sidebar for web */}
        <WebSidebar />
        <ScrollView style={{ flex: 1 }}>
          {/* main content for explore page */}
          <MainContent />
        </ScrollView>
      </HStack>
    </>
  );
};

export default Explorepage;
