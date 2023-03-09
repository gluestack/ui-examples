import React from "react";
import { Box, HStack, Text, VStack } from "../components";
import AmenitiesSection from "./AmenitiesSection";
import BookingOptions from "./BookingOptions";
import CustomerRatingSection from "./CustomerRatingSection";
import FiltersAppliedSection from "./FiltersAppliedSection";
import PlaceTypeSection from "./PlaceTypeSection";
import PriceRangeSection from "./PriceRangeSection";
import SortBySection from "./SortBySection";

const Sidebar = () => {
  return (
    <VStack w="$72">
      <FiltersAppliedSection />
      <SortBySection />
      <PlaceTypeSection />
      <AmenitiesSection />
      <PriceRangeSection />
      <BookingOptions />
      <CustomerRatingSection />
    </VStack>
  );
};
export default Sidebar;
