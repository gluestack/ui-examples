"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapStringChild = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const wrapStringChild = (children, StyledBoxText) => {
  return _react.default.Children.map(children, child => {
    var _child$props, _child$props2;
    return typeof child === 'string' || typeof child === 'number' || (child === null || child === void 0 ? void 0 : child.type) === _react.default.Fragment && (typeof ((_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.children) === 'string' || typeof ((_child$props2 = child.props) === null || _child$props2 === void 0 ? void 0 : _child$props2.children) === 'number') ? /*#__PURE__*/_react.default.createElement(StyledBoxText, null, child) : child;
  });
};
exports.wrapStringChild = wrapStringChild;
//# sourceMappingURL=wrapStringChild.js.map