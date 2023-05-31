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
  modalVisible,
  setModalVisible,
  modalFormStep,
  setModalFormStep,
  activeTab,
  setActiveTab,
}: any) => {
  return (
    <>
      <Box w="100%">
        {/* top banner */}
        <Banner />
        {/* header */}
        <Header colorMode={colorMode} toggleColorMode={toggleColorMode} />
      </Box>
      <ScrollView style={{ flex: 1 }}>
        <Box sx={{ "@md": { display: "none" } }}>
          <MainContent
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            modalFormStep={modalFormStep}
            setModalFormStep={setModalFormStep}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
        </Box>
      </ScrollView>

      <HStack w="100%" display="none" sx={{ "@md": { display: "flex" } }}>
        <WebSidebar />
        <ScrollView style={{ flex: 1 }}>
          <MainContent
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            modalFormStep={modalFormStep}
            setModalFormStep={setModalFormStep}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
        </ScrollView>
      </HStack>
    </>
  );
};

export default Explorepage;
