"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastContext = void 0;
var _react = require("react");
const ToastContext = /*#__PURE__*/(0, _react.createContext)({
  toastInfo: {},
  setToastInfo: () => {},
  setToast: () => {},
  removeToast: () => {},
  hideAll: () => {},
  isActive: () => false,
  visibleToasts: {},
  setVisibleToasts: () => {},
  hideToast: () => {}
});
exports.ToastContext = ToastContext;
//# sourceMappingURL=ToastContext.js.map