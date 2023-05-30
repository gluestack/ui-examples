import React, { useEffect } from "react";
import { StatusBar, Platform } from "react-native";
import { Box } from "../gluestack-ui-components";
import MobileBottomTabs from "./MobileBottomTabs";
import MobileModeChangeButton from "./MobileModeChangeButton";
import { Globe, Heart, MessageCircle, Search, User } from "lucide-react-native";
import MobileProfilePage from "./MobileProfilePage";
import Explorepage from "./ExplorePage";
import MobileSidebar from "./MobileSidebar";

const bottomTabs = [
  {
    icon: Search,
    label: "Explore",
  },
  {
    icon: Heart,
    label: "Wishlist",
  },
  {
    icon: Globe,
    label: "Trips",
  },
  {
    icon: MessageCircle,
    label: "Inbox",
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

  const [activeTab, setActiveTab] = React.useState("Explore");
  const [sidebarDrawerOpen, setSidebarDrawerOpen] = React.useState(false);
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
      {sidebarDrawerOpen ? (
        // sidebar
        <MobileSidebar
          sidebarDrawerOpen={sidebarDrawerOpen}
          setSidebarDrawerOpen={setSidebarDrawerOpen}
        />
      ) : (
        <>
          {activeTab === "Explore" && (
            // explore page
            <Explorepage
              colorMode={colorMode}
              toggleColorMode={toggleColorMode}
              setSidebarDrawerOpen={setSidebarDrawerOpen}
            />
          )}
          {/* profile page for mobile */}
          {activeTab === "Profile" && <MobileProfilePage />}
          <MobileModeChangeButton
            colorMode={colorMode}
            toggleColorMode={toggleColorMode}
          />
          {/* mobile bottom tabs */}
          <Box
            h={80}
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
        </>
      )}
    </Box>
  );
};
export default HomestayPage;
