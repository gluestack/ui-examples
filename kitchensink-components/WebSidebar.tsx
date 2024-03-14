import React from "react";
import { Box } from "../components";
import Sidebar from "./Sidebar";

const WebSidebar = () => {
  return (
    <Box className="flex-1 hidden md:flex md:web:max-h-calc(100vh-144px) max-w-[340px] w-full pl-12">
      {/* common sidebar contents for web and mobile */}
      <Sidebar />
    </Box>
  );
};
export default WebSidebar;
