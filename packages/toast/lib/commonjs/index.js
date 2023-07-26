"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ToastProvider", {
  enumerable: true,
  get: function () {
    return _Toast.ToastProvider;
  }
});
exports.createToast = createToast;
exports.createToastHook = void 0;
var _Toast = require("./Toast");
var _ToastComponent = require("./ToastComponent");
var _ToastTitle = require("./ToastTitle");
var _ToastDescription = require("./ToastDescription");
const createToastHook = () => {
  return _Toast.useToast;
};
exports.createToastHook = createToastHook;
function createToast(_ref) {
  let {
    Root,
    Title,
    Description
  } = _ref;
  const Toast = (0, _ToastComponent.ToastComponent)(Root);
  Toast.Title = (0, _ToastTitle.ToastTitle)(Title);
  Toast.Description = (0, _ToastDescription.ToastDescription)(Description);
  Toast.displayName = 'Toast';
  Toast.Title.displayName = 'Toast.Title';
  Toast.Description.displayName = 'Toast.Description';
  return Toast;
}
//# sourceMappingURL=index.js.map