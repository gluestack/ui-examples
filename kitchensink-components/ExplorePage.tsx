import React from "react";
import { Box, HStack } from "../gluestack-ui-components";
import Banner from "./Banner";
import Header from "./Header";
import { ScrollView } from "react-native";
import WebSidebar from "./WebSidebar";
import MainContent from "./MainContent";

const Explorepage = ({
  colorMode,
  toggleColorMode,
  setSidebarDrawerOpen,
}: any) => {
  return (
    <>
      <Box w="100%">
        <Banner />
        <Header
          colorMode={colorMode}
          toggleColorMode={toggleColorMode}
          setSidebarDrawerOpen={setSidebarDrawerOpen}
        />
      </Box>

      <ScrollView style={{ width: "100%" }}>
        <Box w="100%">
          <Box w="100%">
            <HStack
              w="100%"
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

export default Explorepage;
