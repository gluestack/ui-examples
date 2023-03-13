import React from "react";
import { Box } from "../components";
import Sidebar from "./Sidebar";

const MobileSidebar = ({ sidebarOpen, setSidebarOpen }: any) => {
  return (
    <Box
      w="100%"
      flex={1}
      maxHeight={300}
      sx={{
        "@base": {
          display: "flex",
        },
        "@md": {
          display: "none",
        },
      }}
    >
      <Sidebar />
    </Box>
  );
};
export default MobileSidebar;
