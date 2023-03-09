import React from "react";
import { Avatar, Box, HStack, Switch, Text } from "../components";

const UserProfile = () => {
  return (
    <Avatar size="xs" bg="$backgroundLight600">
      <Avatar.FallbackText>HS</Avatar.FallbackText>
      <Avatar.Image
        source={{
          uri: "https://images.unsplash.com/photo-1494790108377-be9c29b2933",
        }}
      />
      <Avatar.Badge bg="$primary500" />
    </Avatar>
  );
};
export default UserProfile;
