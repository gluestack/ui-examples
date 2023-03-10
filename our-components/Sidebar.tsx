import React from "react";
import { ScrollView } from "react-native";
import { Box, VStack } from "../components";
import AmenitiesSection from "./AmenitiesSection";
import BookingOptions from "./BookingOptions";
import CustomerRatingSection from "./CustomerRatingSection";
import FiltersAppliedSection from "./FiltersAppliedSection";
import PlaceTypeSection from "./PlaceTypeSection";
import PriceRangeSection from "./PriceRangeSection";
import SortBySection from "./SortBySection";

const Sidebar = () => {
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }}>
      <VStack space="xl" py="$6" px="$4">
        <FiltersAppliedSection />
        <SortBySection />
        <PlaceTypeSection />
        <AmenitiesSection />
        <PriceRangeSection />
        <BookingOptions />
        <CustomerRatingSection />
      </VStack>
    </ScrollView>
  );
};
export default Sidebar;
