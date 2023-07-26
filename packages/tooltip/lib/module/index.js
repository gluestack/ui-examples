import { TooltipContent } from './TooltipContent';
import { Tooltip as TooltipMain } from './Tooltip';
export function createTooltip(_ref) {
  let {
    Root,
    Content,
    AnimatePresence
  } = _ref;
  const Tooltip = TooltipMain(Root);
  Tooltip.Content = TooltipContent(Content, AnimatePresence);
  Tooltip.displayName = 'Tooltip';
  Tooltip.Content.displayName = 'Tooltip.Content';
  return Tooltip;
}
//# sourceMappingURL=index.js.map