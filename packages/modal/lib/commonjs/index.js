"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ModalContext", {
  enumerable: true,
  get: function () {
    return _Context.ModalContext;
  }
});
exports.createModal = void 0;
var _Modal = _interopRequireDefault(require("./Modal"));
var _ModalContent = _interopRequireDefault(require("./ModalContent"));
var _ModalBody = _interopRequireDefault(require("./ModalBody"));
var _ModalCloseButton = _interopRequireDefault(require("./ModalCloseButton"));
var _ModalFooter = _interopRequireDefault(require("./ModalFooter"));
var _ModalHeader = _interopRequireDefault(require("./ModalHeader"));
var _ModalBackdrop = _interopRequireDefault(require("./ModalBackdrop"));
var _Context = require("./Context");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const createModal = _ref => {
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
  const Modal = (0, _Modal.default)(Root);
  Modal.Content = (0, _ModalContent.default)(Content, AnimatePresence);
  Modal.CloseButton = (0, _ModalCloseButton.default)(CloseButton);
  Modal.Header = (0, _ModalHeader.default)(Header);
  Modal.Footer = (0, _ModalFooter.default)(Footer);
  Modal.Body = (0, _ModalBody.default)(Body);
  Modal.Backdrop = (0, _ModalBackdrop.default)(Backdrop, AnimatePresence);
  Modal.displayName = 'Modal';
  Modal.Content.displayName = 'Modal.Content';
  Modal.CloseButton.displayName = 'Modal.CloseButton';
  Modal.Header.displayName = 'Modal.Header';
  Modal.Footer.displayName = 'Modal.Footer';
  Modal.Body.displayName = 'Modal.Body';
  Modal.Backdrop.displayName = 'Modal.Backdrop';
  return Modal;
};
exports.createModal = createModal;
//# sourceMappingURL=index.js.map