import { styled } from "@dank-style/react";
import { Text } from "react-native";
import { styledFontsResolver } from "../../../font-resolver/styledFonts";

export default styledFontsResolver(
  Text,
  {
    fontWeight: "$normal",
    fontFamily: "$body",
    fontSize: "$xs",
    color: "$error600",
    ml: "$1",

    _dark: {
      color: "$error500",
    },
  },
  {}
);
