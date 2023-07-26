"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPopover = createPopover;
var _Popover = require("./Popover");
var _PopoverArrow = _interopRequireDefault(require("./PopoverArrow"));
var _PopoverBody = _interopRequireDefault(require("./PopoverBody"));
var _PopoverCloseButton = _interopRequireDefault(require("./PopoverCloseButton"));
var _PopoverContent = _interopRequireDefault(require("./PopoverContent"));
var _PopoverFooter = _interopRequireDefault(require("./PopoverFooter"));
var _PopoverHeader = _interopRequireDefault(require("./PopoverHeader"));
var _PopoverBackdrop = _interopRequireDefault(require("./PopoverBackdrop"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function createPopover(_ref) {
  let {
    Root,
    Arrow,
    Content,
    Header,
    Footer,
    Body,
    Backdrop,
    CloseButton,
    AnimatePresence
  } = _ref;
  const Popover = (0, _Popover.Popover)(Root);
  Popover.Content = (0, _PopoverContent.default)(Content, AnimatePresence);
  Popover.CloseButton = (0, _PopoverCloseButton.default)(CloseButton);
  Popover.Header = (0, _PopoverHeader.default)(Header);
  Popover.Footer = (0, _PopoverFooter.default)(Footer);
  Popover.Body = (0, _PopoverBody.default)(Body);
  Popover.Arrow = (0, _PopoverArrow.default)(Arrow);
  Popover.Backdrop = (0, _PopoverBackdrop.default)(Backdrop, AnimatePresence);
  Popover.displayName = 'Popover';
  Popover.Content.displayName = 'Popover.Content';
  Popover.CloseButton.displayName = 'Popover.CloseButton';
  Popover.Header.displayName = 'Popover.Header';
  Popover.Footer.displayName = 'Popover.Footer';
  Popover.Body.displayName = 'Popover.Body';
  Popover.Arrow.displayName = 'Popover.Arrow';
  Popover.Backdrop.displayName = 'Popover.Backdrop';
  return Popover;
}
//# sourceMappingURL=index.js.map