import React from "react";
import { Pressable } from "react-native";
import { Avatar, Menu, Text } from "../components";

const userMenuItems = [
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
      trigger={(triggerProps: any) => {
        return (
          <Pressable {...triggerProps}>
            <Avatar size="xs" bg="$backgroundLight600">
              <Avatar.FallbackText>HS</Avatar.FallbackText>
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
      <Menu.Content>
        {userMenuItems.map((item, index) => {
          return (
            <Menu.Group>
              {item.items.map((item, index) => {
                return (
                  <Menu.Item>
                    <Text>{item}</Text>
                  </Menu.Item>
                );
              })}
            </Menu.Group>
          );
        })}
      </Menu.Content>
      <Menu.Backdrop />
    </Menu>
  );
};

export default UserProfile;
