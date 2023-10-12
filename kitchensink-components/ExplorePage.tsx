import React from "react";
import { Box, HStack } from "@gluestack-ui/themed";
import Banner from "./Banner";
import Header from "./Header";
import WebSidebar from "./WebSidebar";
import MainContent from "./main-content/MainContent";
import { ScrollView } from "react-native";

const Explorepage = ({ activeTab, setActiveTab }: any) => {
  return (
    <>
      <Box
        w="100%"
        sx={{
          display: activeTab !== "Profile" ? "flex" : "none",
        }}
      >
        {/* top banner */}
        <Banner />
        {/* header */}
        <Header />
      </Box>
      <ScrollView>
        <Box
          sx={{
            display: activeTab !== "Profile" ? "flex" : "none",

            "@md": { display: "none" },
          }}
        >
          <MainContent setActiveTab={setActiveTab} activeTab={activeTab} />
        </Box>
      </ScrollView>

      <HStack w="100%" display="none" sx={{ "@md": { display: "flex" } }}>
        <WebSidebar />
        <ScrollView style={{ flex: 1 }}>
          <MainContent setActiveTab={setActiveTab} activeTab={activeTab} />
        </ScrollView>
      </HStack>
    </>
  );
};

export default Explorepage;
