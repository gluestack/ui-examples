"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAlert = createAlert;
var _Alert = require("./Alert");
var _AlertText = require("./AlertText");
var _AlertIcon = require("./AlertIcon");
function createAlert(_ref) {
  let {
    Root,
    Text,
    Icon
  } = _ref;
  const Alert = (0, _Alert.Alert)(Root);
  Alert.Text = (0, _AlertText.AlertText)(Text);
  Alert.Icon = (0, _AlertIcon.AlertIcon)(Icon);
  Alert.displayName = 'Alert';
  Alert.Text.displayName = 'Alert.Text';
  Alert.Icon.displayName = 'Alert.Icon';
  return Alert;
}
//# sourceMappingURL=index.js.map