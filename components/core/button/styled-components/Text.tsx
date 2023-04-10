import { Text } from "react-native";
import { styled } from "@dank-style/react";
import { styledFontsResolver } from "../../../font-resolver/styledFonts";

export default styledFontsResolver(
  Text,
  {
    fontWeight: "$normal",
    fontFamily: "$body",
    color: "$text800",
  },
  { ancestorStyle: ["_text"], DEBUG: "STYLEDBUTTONTEXT" }
);
