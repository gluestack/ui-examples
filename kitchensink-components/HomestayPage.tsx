import React, { useEffect } from "react";
import { StatusBar, Platform } from "react-native";
import { Box } from "../gluestack-ui-components";
import MobileBottomTabs from "./MobileBottomTabs";
import MobileModeChangeButton from "./MobileModeChangeButton";
import {
  Plus,
  Home,
  MessageCircle,
  User,
  Filter,
  PlayCircle,
} from "lucide-react-native";
import MobileProfilePage from "./MobileProfilePage";
import Explorepage from "./ExplorePage";
import MobileSidebar from "./MobileSidebar";
import ListYourPlaceModal from "./ListYourPlaceModal";

const bottomTabs = [
  {
    icon: Home,
    label: "Home",
  },
  {
    icon: Filter,
    label: "Filter",
  },
  {
    icon: Plus,
    label: "Listing",
  },
  {
    icon: MessageCircle,
    label: "Inbox",
    disabled: true,
  },
  {
    icon: User,
    label: "Profile",
  },
];

const HomestayPage = ({ colorMode, toggleColorMode }: any) => {
  useEffect(() => {
    if (Platform.OS === "web") {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
    }
  }, []);

  const [activeTab, setActiveTab] = React.useState("Home");
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalFormStep, setModalFormStep] = React.useState(0);

  function TabContent(activeTab: string) {
    switch (activeTab) {
      case "Home":
        return (
          <Explorepage
            colorMode={colorMode}
            toggleColorMode={toggleColorMode}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            modalFormStep={modalFormStep}
            setModalFormStep={setModalFormStep}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
        );
      case "Profile":
        return <MobileProfilePage />;
      case "Filter":
        return (
          <MobileSidebar setActiveTab={setActiveTab} activeTab={activeTab} />
        );
      case "Listing":
        return (
          <Explorepage
            colorMode={colorMode}
            toggleColorMode={toggleColorMode}
            modalVisible={modalVisible || activeTab === "Listing"}
            setModalVisible={setModalVisible}
            modalFormStep={modalFormStep}
            setModalFormStep={setModalFormStep}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
        );
      default:
        return (
          <Explorepage
            colorMode={colorMode}
            toggleColorMode={toggleColorMode}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            modalFormStep={modalFormStep}
            setModalFormStep={setModalFormStep}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
        );
    }
  }
  return (
    <Box
      flex={1}
      sx={{
        _light: { bg: "white" },
        _dark: { bg: "$backgroundDark950" },
      }}
    >
      <StatusBar
        // @ts-ignore
        style={
          {
            // backgroundColor: colorMode === "light" ? "#E5E5E5" : "#262626",
          }
        }
      />

      <Box flex={1}>
        {/* profile page for mobile */}
        {TabContent(activeTab)}
        <MobileModeChangeButton
          colorMode={colorMode}
          toggleColorMode={toggleColorMode}
        />
      </Box>
      {/* mobile bottom tabs */}
      <Box
        h={72}
        alignItems="center"
        w="100%"
        sx={{
          "@md": {
            display: "none",
          },
          _dark: { borderColor: "$borderDark900" },
        }}
        borderTopWidth="$1"
        borderColor="$borderLight50"
      >
        <MobileBottomTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          bottomTabs={bottomTabs}
        />
      </Box>
    </Box>
  );
};
export default HomestayPage;
