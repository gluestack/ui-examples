"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createVStack = createVStack;
var _VStack = require("./VStack");
function createVStack(_ref) {
  let {
    Root,
    Spacer
  } = _ref;
  const VStack = (0, _VStack.VStack)(Root, Spacer);
  VStack.displayName = 'VStack';
  return VStack;
}
//# sourceMappingURL=index.js.map