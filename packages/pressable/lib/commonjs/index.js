"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPressable = createPressable;
var _Pressable = _interopRequireDefault(require("./Pressable"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function createPressable(_ref) {
  let {
    Root
  } = _ref;
  const Pressable = (0, _Pressable.default)(Root);
  Pressable.displayName = 'Pressable';
  return Pressable;
}
//# sourceMappingURL=index.js.map