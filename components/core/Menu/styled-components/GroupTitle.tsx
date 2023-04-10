import { Text } from "react-native";
import { styled } from "@dank-style/react";
import { styledFontsResolver } from "../../../font-resolver/styledFonts";

export default styledFontsResolver(
  Text,
  {
    fontFamily: "$body",
    fontSize: "$xs",
    p: "$3",
    color: "$textLight500",
    fontWeight: "$medium",
    _dark: {
      color: "$textDark400",
    },
  },
  {}
);
