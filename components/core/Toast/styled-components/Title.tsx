//@ts-nocheck

import { Text } from "react-native";
import { styled } from "@dank-style/react";
import { styledFontsResolver } from "../../../font-resolver/styledFonts";

export default styledFontsResolver(
  Text,
  {
    fontWeight: "$normal",
    fontFamily: "$body",
    color: "$textLight900",
    fontWeight: "$normal",
    fontFamily: "$body",
    fontStyle: "normal",
    fontSize: "$xs",
    letterSpacing: "$md",
    lineHeight: "$lg",

    _dark: {
      color: "$textDark50",
    },
  },
  {}
);
