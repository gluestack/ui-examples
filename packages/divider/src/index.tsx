import type React from "react";
import { Divider as DividerMain } from "./Divider";

export function createDivider<DividerProps>({
  Root,
}: {
  Root: React.ComponentType<DividerProps>;
}) {
  const Divider = Root;
  Divider.displayName = "Divider";
  return Divider;
}
