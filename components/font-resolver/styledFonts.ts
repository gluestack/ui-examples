import { createStyled, FontResolver } from "@dank-style/react";
import { config } from "../../gluestack-ui.config";

const fontWeights: any = {
  "100": "Thin",
  "200": "ExtraLight",
  "300": "Light",
  "400": "Regular",
  "500": "Medium",
  "600": "SemiBold",
  "700": "Bold",
  "800": "ExtraBold",
  "900": "Black",
  "950": "ExtraBlack",
};

const tokenizeFontFamily = (fontFamily: any) => {
  const tokenedFontFamily = fontFamily.slice(1);

  //@ts-ignore
  if (config.theme.tokens.fonts[tokenedFontFamily]) {
    //@ts-ignore
    return config.theme.tokens.fonts[tokenedFontFamily];
  }

  return fontFamily;
};

const tokenizeFontWeight = (fontWeight: any) => {
  const tokenedFontFamily = fontWeight.slice(1);

  //@ts-ignore
  if (config.theme.tokens.fontWeights[tokenedFontFamily]) {
    //@ts-ignore
    return config.theme.tokens.fontWeights[tokenedFontFamily];
  }

  return fontWeight;
};

const fontMapper = (style: any) => {
  let fontFamilyValue = tokenizeFontFamily(style.fontFamily)
    .replace(/ /g, "")
    .replace(/^\w/, (c: any) => c.toUpperCase()); // '$heading'

  if (
    style.fontWeight &&
    (typeof style.fontWeight === "string" ||
      typeof style.fontWeight === "number")
  ) {
    let fontWeight = tokenizeFontWeight(style.fontWeight);
    fontFamilyValue = `${fontFamilyValue}_${fontWeight}${fontWeights[fontWeight]}`;
  }
  if (style.fontStyle && typeof style.fontStyle === "string") {
    const fontStyle = style.fontStyle.replace(/^\w/, (c: any) =>
      c.toUpperCase()
    );
    fontFamilyValue = `${fontFamilyValue}_${fontStyle}`;
  }

  style.fontFamily = fontFamilyValue;

  delete style.fontWeight;
  delete style.fontStyle;
};

export const styledFontsResolver = createStyled([
  new FontResolver({
    mapFonts: fontMapper,
  }),
]);
