import React from "react";
import { Pressable } from "react-native";
import { Avatar, Menu } from "../gluestack-ui-components";

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

const UserProfile = () => {
  return (
    <Menu
      offset={10}
      placement="bottom right"
      trigger={({ ...triggerProps }) => {
        return (
          <Pressable {...triggerProps}>
            <Avatar size="sm" bg="$backgroundLight600">
              <Avatar.FallbackText>H S</Avatar.FallbackText>
              <Avatar.Image
                source={
                  {
                    // uri: "https://images.unsplash.com/photo-1494790108377-be9c29b2933",
                  }
                }
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
