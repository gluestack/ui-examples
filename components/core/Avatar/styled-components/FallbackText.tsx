import { Text } from "react-native";
import { styled } from "@dank-style/react";
import { styledFontsResolver } from "../../../font-resolver/styledFonts";

export default styledFontsResolver(
  Text,
  {
    fontFamily: "$body",
    color: "white",
    fontWeight: "$semibold",
    fontSize: "$xl",
    display: "flex",
    overflow: "hidden",
    textTransform: "uppercase",
  },
  { ancestorStyle: ["_text"], DEBUG: "BGBGBG" }
);
