import { styled } from "@dank-style/react";
import { Text } from "react-native";
import { styledFontsResolver } from "../../../font-resolver/styledFonts";

export default styledFontsResolver(
  Text,
  {
    fontFamily: "$body",
    // fontSize: '$sm',
    fontWeight: "$medium",
    color: "$textLight500",

    _dark: {
      color: "$textDark400",
    },
  },
  { ancestorStyle: ["_labelText"] }
);
