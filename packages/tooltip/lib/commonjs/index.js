"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTooltip = createTooltip;
var _TooltipContent = require("./TooltipContent");
var _Tooltip = require("./Tooltip");
function createTooltip(_ref) {
  let {
    Root,
    Content,
    AnimatePresence
  } = _ref;
  const Tooltip = (0, _Tooltip.Tooltip)(Root);
  Tooltip.Content = (0, _TooltipContent.TooltipContent)(Content, AnimatePresence);
  Tooltip.displayName = 'Tooltip';
  Tooltip.Content.displayName = 'Tooltip.Content';
  return Tooltip;
}
//# sourceMappingURL=index.js.map