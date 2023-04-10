//@ts-nocheck

import { Text } from "react-native";
import { styled } from "@dank-style/react";
import { styledFontsResolver } from "../../../font-resolver/styledFonts";

export default styledFontsResolver(
  Text,
  {
    fontWeight: "$normal",
    fontFamily: "$body",
    color: "$text50",
    fontWeight: "$normal",
    fontFamily: "$body",
    fontStyle: "normal",
    fontSize: "$sm",
    letterSpacing: "$md",
    lineHeight: "$lg",

    variants: {
      variant: {
        modalHeader: {
          fontSize: "$md",
          fontWeight: "$semibold",
          lineHeight: "$sm",
        },
      },
    },

    _dark: {
      color: "$text900",
    },
  },
  {}
);
