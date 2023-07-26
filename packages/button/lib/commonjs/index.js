"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createButton = createButton;
var _Button = require("./Button");
var _ButtonGroup = require("./ButtonGroup");
var _ButtonText = require("./ButtonText");
var _ButtonSpinner = require("./ButtonSpinner");
function createButton(_ref) {
  let {
    Root,
    Text,
    Group,
    GroupHSpacer,
    GroupVSpacer,
    Spinner
  } = _ref;
  const Button = (0, _Button.Button)(Root);
  Button.Text = (0, _ButtonText.ButtonText)(Text);
  Button.Group = (0, _ButtonGroup.ButtonGroup)(Group, GroupHSpacer, GroupVSpacer);
  Button.Spinner = (0, _ButtonSpinner.ButtonSpinner)(Spinner);
  Button.displayName = 'Button';
  Button.Text.displayName = 'Button.Text';
  Button.Group.displayName = 'Button.Group';
  Button.Spinner.displayName = 'Button.Spinner';
  return Button;
}
//# sourceMappingURL=index.js.map