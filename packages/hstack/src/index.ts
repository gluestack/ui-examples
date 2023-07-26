import { HStack as HStackMain } from "./HStack";
import { View } from "react-native";
export function createHStack<StyledHStackProps, StyledHStackSpacerProps>({
  Root,
  Spacer,
}: {
  Root: React.ComponentType<StyledHStackProps>;
  Spacer: React.ComponentType<StyledHStackSpacerProps>;
}) {
  return View;
  const HStack = HStackMain(Root, Spacer);

  HStack.displayName = "HStack";

  return HStack;
}
