import FabMain from "./Fab";
import FabLabel from "./FabLabel";
import { FabIcon } from "./FabIcon";
import type { IFabComponentType } from "./types";

export function createFab<StyledFab, StyledFabLabel, StyledFabIcon>({
  Root,
  Label,
  Icon,
}: {
  Root: React.ComponentType<StyledFab>;
  Label: React.ComponentType<StyledFabLabel>;
  Icon: React.ComponentType<StyledFabIcon>;
}) {
  const Fab: any = Root;
  Fab.Label = Label;
  Fab.Icon = Icon;
  Fab.displayName = "Fab";
  Fab.Icon.displayName = "Fab.Icon";

  return Fab as IFabComponentType<StyledFab, StyledFabLabel, StyledFabIcon>;
}
