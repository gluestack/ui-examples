import React from "react";
import { Box, Button, Heading, HStack } from "../components";
import { ListIcon } from "../components/core/Icons/Icons";

const MainContentHeader = () => {
  return (
    <Box>
      <HStack alignItems="center" justifyContent="space-between">
        <Heading fontSize="$2xl">New This week</Heading>
        <Button
          // @ts-ignore
          variant="outline"
          action="secondary"
        >
          <ListIcon w="$4" h="$4" />
          <Button.Text
            sx={{
              _light: {
                // @ts-ignore
                color: "$textLight800",
              },
              _dark: {
                // @ts-ignore
                color: "$textDark300",
              },
            }}
          >
            List your place
          </Button.Text>
        </Button>
      </HStack>
    </Box>
  );
};
export default MainContentHeader;
