import React from "react";
import { Box } from "../gluestack-ui-components";
import Sidebar from "./Sidebar";

const WebSidebar = () => {
  return (
    <Box
      maxWidth="$72"
      w="100%"
      flex={1}
      display="none"
      sx={{
        "@md": {
          display: "flex",
          _web: {
            maxHeight: "calc(100vh - 144px)",
          },
        },
      }}
    >
      {/* common sidebar contents for web and mobile */}
      <Sidebar />
    </Box>
  );
};
export default WebSidebar;
