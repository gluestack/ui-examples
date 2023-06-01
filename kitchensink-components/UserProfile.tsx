import React from "react";
import { Pressable } from "react-native";
import { Avatar, Menu } from "../gluestack-ui-components";
import LogoutAlertDialog from "./LogoutAlertDialog";

const UserProfile = () => {
  const [openLogoutAlertDialog, setOpenLogoutAlertDialog] =
    React.useState(false);
  const userMenuItems = [
    {
      title: "Messages",
    },
    {
      title: "Notifications",
    },
    {
      title: "Trips",
    },
    {
      title: "Wishlists",
    },
    {
      title: "Post your home",
    },
    {
      title: "Host an experience",
    },
    {
      title: "Accounts",
    },
    {
      title: "Help",
    },
    {
      title: "Log out",
    },
  ];

  return (
    <>
      <Menu
        offset={10}
        placement="bottom right"
        trigger={({ ...triggerProps }) => {
          return (
            <Pressable {...triggerProps}>
              <Avatar size="sm" bg="$backgroundLight600">
                <Avatar.FallbackText>Henry Stan</Avatar.FallbackText>
                <Avatar.Image
                  source={
                    {
                      // uri: "https://images.unsplash.com/photo-1494790108377-be9c29b2933",
                    }
                  }
                />
                <Avatar.Badge
                  bg="$primary500"
                  sx={{
                    _dark: {
                      borderColor: "$backgroundDark900",
                    },
                  }}
                />
              </Avatar>
            </Pressable>
          );
        }}
      >
        {userMenuItems.map((item) => (
          <Menu.Item key={item.title} textValue={item.title}>
            <Menu.ItemLabel>{item.title}</Menu.ItemLabel>
          </Menu.Item>
        ))}
      </Menu>
      <LogoutAlertDialog
        openLogoutAlertDialog={openLogoutAlertDialog}
        setOpenLogoutAlertDialog={setOpenLogoutAlertDialog}
      />
    </>
  );
};

export default UserProfile;
