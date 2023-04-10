import { styled } from "@dank-style/react";
import { Text } from "react-native";
import { styledFontsResolver } from "../../../font-resolver/styledFonts";

export default styledFontsResolver(
  Text,
  {
    fontWeight: "$normal",
    fontFamily: "$body",
  },
  {}
);
