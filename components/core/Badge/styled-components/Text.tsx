import { Text } from "react-native";
import { styled } from "@dank-style/react";
import { styledFontsResolver } from "../../../font-resolver/styledFonts";

export default styledFontsResolver(
  Text,
  {
    fontFamily: "$body",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "$medium",
    // fontFamily: '$heading',
    color: "$textLight800",
    textTransform: "uppercase",
    letterSpacing: "$md",
    _dark: {
      color: "$textDark100",
    },
  },
  { ancestorStyle: ["_text"] }
);
