import React from "react";
import { Box } from "../components";
import Sidebar from "./Sidebar";

const WebSidebar = () => {
  return (
    <Box
      maxWidth="$72"
      w="100%"
      flex={1}
      maxHeight="calc(100vh - 144px)"
      sx={{
        "@base": {
          display: "none",
        },
        "@md": {
          display: "flex",
        },
      }}
    >
      <Sidebar />
    </Box>
  );
};
export default WebSidebar;
