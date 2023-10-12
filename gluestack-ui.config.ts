import { config as defaultConfig } from "@gluestack-ui/config";

export const config = {
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    colors: {
      ...defaultConfig.tokens.colors,
      primary0: "#ffffff",
      primary50: "#FFF1F2",
      primary100: "#FFE4E6",
      primary200: "#FECDD3",
      primary300: "#FDA4AF",
      primary400: "#EE596F",
      primary500: "#F43F5E",
      primary600: "#E11d48",
      primary600_alpha60: "#5C93C8",
      primary700: "#BE123C",
      primary800: "#9F1239",
      primary900: "#881337",
      primary950: "#440A1C",
    },
  } as const,
};

type Config = typeof config;
declare module "@gluestack-ui/config" {
  interface IConfig extends Config {}
}
