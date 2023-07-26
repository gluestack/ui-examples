"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAlertDialog = createAlertDialog;
var _AlertDialog = require("./AlertDialog");
var _AlertDialogContent = _interopRequireDefault(require("./AlertDialogContent"));
var _AlertDialogBody = _interopRequireDefault(require("./AlertDialogBody"));
var _AlertDialogCloseButton = _interopRequireDefault(require("./AlertDialogCloseButton"));
var _AlertDialogFooter = _interopRequireDefault(require("./AlertDialogFooter"));
var _AlertDialogHeader = _interopRequireDefault(require("./AlertDialogHeader"));
var _AlertDialogBackdrop = _interopRequireDefault(require("./AlertDialogBackdrop"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function createAlertDialog(_ref) {
  let {
    Root,
    Content,
    CloseButton,
    Header,
    Footer,
    Body,
    Backdrop,
    AnimatePresence
  } = _ref;
  const AlertDialog = (0, _AlertDialog.AlertDialog)(Root);
  AlertDialog.Content = (0, _AlertDialogContent.default)(Content, AnimatePresence);
  AlertDialog.CloseButton = (0, _AlertDialogCloseButton.default)(CloseButton);
  AlertDialog.Header = (0, _AlertDialogHeader.default)(Header);
  AlertDialog.Footer = (0, _AlertDialogFooter.default)(Footer);
  AlertDialog.Body = (0, _AlertDialogBody.default)(Body);
  AlertDialog.Backdrop = (0, _AlertDialogBackdrop.default)(Backdrop, AnimatePresence);
  AlertDialog.displayName = 'AlertDialog';
  AlertDialog.Content.displayName = 'AlertDialog.Content';
  AlertDialog.CloseButton.displayName = 'AlertDialog.CloseButton';
  AlertDialog.Header.displayName = 'AlertDialog.Header';
  AlertDialog.Footer.displayName = 'AlertDialog.Footer';
  AlertDialog.Body.displayName = 'AlertDialog.Body';
  AlertDialog.Backdrop.displayName = 'AlertDialog.Backdrop';
  return AlertDialog;
}
//# sourceMappingURL=index.js.map