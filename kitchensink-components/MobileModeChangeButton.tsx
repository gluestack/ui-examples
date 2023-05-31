import React from "react";
import { Fab, Icon } from "../gluestack-ui-components";
import { Moon, Sun } from "lucide-react-native";

const MobileModeChangeButton = ({ colorMode, toggleColorMode }: any) => {
  return (
    <>
      <Fab
        sx={{
          "@md": {
            display: "none",
          },
          "@base": {
            bottom: "$4",
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
