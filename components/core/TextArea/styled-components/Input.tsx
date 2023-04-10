import { styled } from "@dank-style/react";
import { TextInput } from "react-native";
import { styledFontsResolver } from "../../../font-resolver/styledFonts";

export default styledFontsResolver(
  TextInput,
  {
    p: "$2",
    // @ts-ignore
    multiline: true,
    textAlignVertical: "top",
    h: 100,
    w: 300,
    placeholderTextColor: "$red800",
    outlineColor: "$primary600",
  },
  { ancestorStyle: ["_input"] }
);
