"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHStack = createHStack;
var _HStack = require("./HStack");
function createHStack(_ref) {
  let {
    Root,
    Spacer
  } = _ref;
  const HStack = (0, _HStack.HStack)(Root, Spacer);
  HStack.displayName = 'HStack';
  return HStack;
}
//# sourceMappingURL=index.js.map