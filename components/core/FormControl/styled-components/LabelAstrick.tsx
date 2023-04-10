// import { Text } from '@gluestack-ui/ui';
import { styled } from "@dank-style/react";
import { Text } from "react-native";
import { styledFontsResolver } from "../../../font-resolver/styledFonts";
export default styledFontsResolver(
  Text,
  {
    fontWeight: "$normal",
    fontFamily: "$body",
    color: "$error600",

    _dark: {
      color: "$error500",
    },
  },
  {}
);
