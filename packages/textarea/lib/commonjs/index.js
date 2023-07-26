"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTextArea = createTextArea;
var _TextArea = require("./TextArea");
var _TextAreaRoot = require("./TextAreaRoot");
function createTextArea(_ref) {
  let {
    Root,
    Input
  } = _ref;
  const TextAreaTemp = (0, _TextAreaRoot.TextAreaRoot)(Root);
  TextAreaTemp.Input = (0, _TextArea.TextArea)(Input);
  TextAreaTemp.displayName = 'TextArea';
  TextAreaTemp.Input.displayName = 'TextArea.Input';
  return TextAreaTemp;
}
//# sourceMappingURL=index.js.map