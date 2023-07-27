import React, { useEffect } from "react";
import {
  StatusBar,
  Platform,
  // View,
  // Text as RNText,
  // Pressable,
  // Modal,
  // Image,
  // SliderBase,
  // Switch,
  // ActivityIndicator,
  // TextInput,
  // ScrollView,
} from "react-native";
import {
  Box,
  // Button,
  // Text,
  // Modal as GUIModal,
  // Spinner,
  // Switch as GUISwitch,
} from "../gluestack-ui-components";
import MobileBottomTabs from "./MobileBottomTabs";
import MobileModeChangeButton from "./MobileModeChangeButton";
import {
  Plus,
  Home,
  MessageCircle,
  User,
  SlidersHorizontal,
  // Scroll,
} from "lucide-react-native";
import MobileProfilePage from "./MobileProfilePage";
import Explorepage from "./ExplorePage";

const bottomTabs = [
  {
    icon: Home,
    label: "Home",
  },
  {
    icon: SlidersHorizontal,
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
  // {
  //   icon: MessageCircle,
  //   label: "GUI",
  // },
  // {
  //   icon: User,
  //   label: "RN",
  // },
];

const HomestayPage = () => {
  useEffect(() => {
    if (Platform.OS === "web") {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
    }
  }, []);

  const [activeTab, setActiveTab] = React.useState("Home");
  // const [modalRN, setModalRN] = React.useState(false);
  // const [modalGUI, setModalGUI] = React.useState(false);

  return (
    <>
      {/* {activeTab === "RN" ? (
        <View>
          <Pressable onPress={() => setActiveTab("Home")}>
            <RNText>Go Back</RNText>
          </Pressable>
          <Pressable
            style={{ marginVertical: 8, padding: 8, backgroundColor: "red" }}
            onPress={() => setModalRN(true)}
          >
            <RNText>Open Modal</RNText>
          </Pressable>
          <Modal animationType="fade" visible={modalRN}>
            <View style={{ backgroundColor: "yellow", padding: 80 }}>
              <ScrollView>
                {new Array(100).fill(0).map((_, i) => (
                  <View>
                    <RNText>Modal</RNText>
                    <ActivityIndicator />
                    <Switch />
                  </View>
                ))}
              </ScrollView>
              <Pressable
                style={{
                  marginVertical: 8,
                  padding: 8,
                  backgroundColor: "red",
                }}
                onPress={() => setModalRN(false)}
              >
                <RNText>Close Modal</RNText>
              </Pressable>
            </View>
          </Modal>
          <RNText>RN</RNText>
        </View>
      ) : activeTab === "GUI" ? (
        <Box>
          <Button onPress={() => setActiveTab("Home")}>
            <Button.Text>Go Back</Button.Text>
          </Button>
          <Button
            // style={{ marginVertical: 8, padding: 8, backgroundColor: "red" }}
            onPress={() => setModalGUI(true)}
          >
            <Button.Text>Open Modal</Button.Text>
          </Button>
          <GUIModal isOpen={modalGUI} onClose={() => setModalGUI(false)}>
            <GUIModal.Content>
              <GUIModal.Body>
                <ScrollView>
                  {new Array(100).fill(0).map((_, i) => (
                    <Box>
                      <Text>Modal</Text>
                      <Spinner />
                      <GUISwitch />
                    </Box>
                  ))}
                </ScrollView>
              </GUIModal.Body>
              <GUIModal.Footer>
                <Button
                  // style={{
                  //   marginVertical: 8,
                  //   padding: 8,
                  //   backgroundColor: "red",
                  // }}
                  onPress={() => setModalGUI(false)}
                >
                  <Text>Close Modal</Text>
                </Button>
              </GUIModal.Footer>
            </GUIModal.Content>
          </GUIModal>
          <Text>GlueStack UI</Text>
        </Box>
      ) : ( */}
      <MobileBottomTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        bottomTabs={bottomTabs}
      />
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
          <MobileProfilePage isActive={activeTab === "Profile"} />

          <Explorepage
            // modalVisible={modalVisible}
            // setModalVisible={setModalVisible}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />

          {/* )} */}
          <MobileModeChangeButton />
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
        ></Box>
      </Box>
      {/* )} */}
    </>
  );
};
export default HomestayPage;
