"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDivider = createDivider;
var _Divider = require("./Divider");
function createDivider(_ref) {
  let {
    Root
  } = _ref;
  const Divider = (0, _Divider.Divider)(Root);
  Divider.displayName = 'Divider';
  return Divider;
}
//# sourceMappingURL=index.js.map