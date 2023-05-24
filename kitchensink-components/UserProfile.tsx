import React from "react";
import { Pressable } from "react-native";
import { Avatar, Divider, Menu, Text } from "../gluestack-ui-components";

const userMenuItems = [
  "Messages",
  "Notifications",
  "Trips",
  "Wishlists",
  "Post your home",
  "Host an experience",
  "Accounts",
  "Help",
  "Log out",
];
const userMenuItems1 = [
  {
    section: "1",
    items: ["Messages", "Notifications", "Trips", "Wishlists"],
  },
  {
    section: "2",
    items: ["Post your home", "Host an experience", "Accounts"],
  },
  {
    section: "3",
    items: ["Help", "Log out"],
  },
];

const UserProfile = () => {
  return (
    <Menu
      trigger={({ ...triggerProps }) => {
        return (
          <Pressable {...triggerProps}>
            <Avatar size="xs" bg="$backgroundLight600">
              <Avatar.FallbackText>H S</Avatar.FallbackText>
              <Avatar.Image
                source={{
                  uri: "https://images.unsplash.com/photo-1494790108377-be9c29b2933",
                }}
              />
              <Avatar.Badge bg="$primary500" />
            </Avatar>
          </Pressable>
        );
      }}
    >
      {userMenuItems.map((item, index) => (
        <Menu.Item key={item} textValue={item}>
          <Menu.ItemLabel>{item}</Menu.ItemLabel>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default UserProfile;
