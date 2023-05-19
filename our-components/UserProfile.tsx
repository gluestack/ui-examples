import React from "react";
import { Pressable } from "react-native";
import { Avatar, Divider, Menu, Text } from "../components";

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
    <Pressable>
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
    //   <Menu
    //   trigger={(triggerProps: any) => {
    //     return (
    //       <Pressable {...triggerProps}>
    //         <Avatar size="xs" bg="$backgroundLight600">
    //           <Avatar.FallbackText>HS</Avatar.FallbackText>
    //           <Avatar.Image
    //             source={{
    //               uri: "https://images.unsplash.com/photo-1494790108377-be9c29b2933",
    //             }}
    //           />
    //           <Avatar.Badge bg="$primary500" />
    //         </Avatar>
    //       </Pressable>
    //     );
    //   }}
    // >
    //   {userMenuItems.map((item, index) => {
    //     return
    //   <Menu.Item key="Item1" textValue="Item1">
    //     <Menu.ItemLabel>Item1</Menu.ItemLabel>
    //   </Menu.Item>
    //   <Menu.Item key="Roboto" textValue="Roboto">
    //     <Menu.ItemLabel>Roboto</Menu.ItemLabel>
    //   </Menu.Item>
    //   <Menu.Item key="Poppins" textValue="Poppins">
    //     <Menu.ItemLabel>Poppins</Menu.ItemLabel>
    //   </Menu.Item>
    // </Menu>
  );
};

export default UserProfile;
