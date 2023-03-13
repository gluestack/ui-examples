import React from "react";
import { Box, HStack } from "../components";
import MainContentHeader from "./MainContentHeader";
import NewThisWeekFold from "./NewThisWeekFold";

const MainContent = () => {
  return (
    <Box maxHeight="calc(100vh - 144px)" flex={1} px="$4" py="$6">
      <MainContentHeader />
      <NewThisWeekFold />
    </Box>
  );
};
export default MainContent;
