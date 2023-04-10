import React from "react";
import { ScrollView } from "react-native";
import { Box, HStack } from "../components";
import HomestayInformationFold from "./HomestayInformationFold";
import MainContentHeader from "./MainContentHeader";
import NewThisWeekFold from "./NewThisWeekFold";

const MainContent = () => {
  return (
    <Box maxHeight="calc(100vh - 144px)" flex={1}>
      <ScrollView>
        <Box px="$4">
          <MainContentHeader />
          <NewThisWeekFold />
          <HomestayInformationFold />
        </Box>
      </ScrollView>
    </Box>
  );
};
export default MainContent;
