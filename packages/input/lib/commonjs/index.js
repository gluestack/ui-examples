"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createInput = void 0;
var _InputIcon = require("./InputIcon");
var _InputGroup = require("./InputGroup");
var _Input = require("./Input");
const createInput = _ref => {
  let {
    Root,
    Icon,
    Input
  } = _ref;
  const InputField = (0, _InputGroup.InputGroup)(Root);
  InputField.Icon = (0, _InputIcon.InputIcon)(Icon);
  InputField.Input = (0, _Input.Input)(Input);
  InputField.displayName = 'InputField';
  InputField.Icon.displayName = 'InputField.Icon';
  InputField.Input.displayName = 'InputField.Input';
  return InputField;
};
exports.createInput = createInput;
//# sourceMappingURL=index.js.map