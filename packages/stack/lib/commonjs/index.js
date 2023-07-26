"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStack = createStack;
var _Stack = require("./Stack");
function createStack(_ref) {
  let {
    Root,
    HSpacer,
    VSpacer
  } = _ref;
  const Stack = (0, _Stack.Stack)(Root, HSpacer, VSpacer);
  Stack.displayName = 'Stack';
  return Stack;
}
//# sourceMappingURL=index.js.map