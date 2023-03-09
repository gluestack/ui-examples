import React from "react";
import { Box, Button, HStack } from "../components";
import Banner from "./Banner";
import Header from "./Header";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

const HomestayPage = () => {
  return (
    <Box>
      <Banner />
      <Header />
      <Box w="100%">
        <HStack
          alignItems="center"
          justifyContent="space-between"
          w="80%"
          mx="auto"
        >
          <Sidebar />
          <MainContent />
        </HStack>
      </Box>
    </Box>
  );
};
export default HomestayPage;
