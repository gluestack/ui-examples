"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePopoverContent = exports.usePopover = exports.PopoverProvider = exports.PopoverContentProvider = void 0;
var _utils = require("@gluestack-ui/utils");
const [PopoverProvider, usePopover] = (0, _utils.createContext)('PopoverContext');
exports.usePopover = usePopover;
exports.PopoverProvider = PopoverProvider;
const [PopoverContentProvider, usePopoverContent] = (0, _utils.createContext)('PopoverContext');
exports.usePopoverContent = usePopoverContent;
exports.PopoverContentProvider = PopoverContentProvider;
//# sourceMappingURL=PopoverContext.js.map