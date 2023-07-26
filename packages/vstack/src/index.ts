import { VStack as VStackMain } from "./VStack";
import { View } from "react-native";

export function createVStack<VStackProps, VStackSpacerProps>({
  Root,
  Spacer,
}: {
  Root: React.ComponentType<VStackProps>;
  Spacer: React.ComponentType<VStackSpacerProps>;
}) {
  return View;
  const VStack = VStackMain(Root, Spacer);

  VStack.displayName = "VStack";
  return VStack;
}
