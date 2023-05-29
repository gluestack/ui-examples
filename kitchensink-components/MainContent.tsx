import React from "react";
import { ScrollView } from "react-native";
import { Box } from "../gluestack-ui-components";
import HomestayInformationFold from "./HomestayInformationFold";
import MainContentHeader from "./MainContentHeader";
import NewThisWeekFold from "./NewThisWeekFold";

const MainContent = () => {
  return (
    <Box sx={{ "@md": { maxHeight: "calc(100vh - 144px)" } }} flex={1}>
      <ScrollView>
        <Box>
          <MainContentHeader />
          <NewThisWeekFold />
          <HomestayInformationFold />
        </Box>
      </ScrollView>
    </Box>
  );
};
export default MainContent;
