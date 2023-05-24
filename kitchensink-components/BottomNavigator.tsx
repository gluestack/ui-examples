import { createBottomTabNavigator } from "react-navigation-tabs";
import PlaceTypeSection from "./PlaceTypeSection";

const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: PlaceTypeSection,
    Profile: PlaceTypeSection,
    Settings: PlaceTypeSection,
  },
  {
    tabBarOptions: {
      activeTintColor: "blue", // Customize the active tab color
      inactiveTintColor: "gray", // Customize the inactive tab color
    },
  }
);

export default BottomTabNavigator;
