"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionsheetContext = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ActionsheetContext = /*#__PURE__*/_react.default.createContext({
  hideDragIndicator: false,
  handleClose: () => {},
  initialFocusRef: {
    current: null
  },
  finalFocusRef: {
    current: null
  },
  visible: false,
  closeOnOverlayClick: false,
  avoidKeyboard: false,
  bottomInset: 0,
  trapFocus: true
});
exports.ActionsheetContext = ActionsheetContext;
//# sourceMappingURL=context.js.map