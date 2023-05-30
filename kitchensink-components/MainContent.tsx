import React from "react";
import { ScrollView } from "react-native";
import { Box } from "../gluestack-ui-components";
import HomestayInformationFold from "./HomestayInformationFold";
import MainContentHeader from "./MainContentHeader";
import NewThisWeekFold from "./NewThisWeekFold";

const MainContent = () => {
  return (
    <Box
      sx={{ "@md": { maxHeight: "calc(100vh - 144px)", pr: "$8" } }}
      flex={1}
    >
      <Box>
        {/* explore page main content header */}
        <MainContentHeader />
        {/* explore page new this week fold 1 */}
        <NewThisWeekFold />
        {/* explore page homestay info fold 2 */}
        <HomestayInformationFold />
      </Box>
    </Box>
  );
};
export default MainContent;
