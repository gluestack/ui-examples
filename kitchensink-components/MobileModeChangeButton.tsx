import React from "react";
import { Fab, Icon } from "../gluestack-ui-components";
import { Box } from "../gluestack-ui-components";
import { Moon, Sun } from "lucide-react-native";
import Root from "../gluestack-ui-components/core/Fab/styled-components/Root";

const MobileModeChangeButton = ({ colorMode, toggleColorMode }: any) => {
  return (
    <>
      <Fab
        sx={{
          "@lg": {
            display: "none",
          },
          "@base": {
            bottom: "$20",
            right: "$4",
          },
        }}
        onPress={toggleColorMode}
      >
        <Icon as={colorMode === "light" ? Moon : Sun} />
      </Fab>
    </>
  );
};

export default MobileModeChangeButton;
