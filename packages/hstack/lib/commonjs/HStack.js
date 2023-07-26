"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HStack = HStack;
var _react = _interopRequireWildcard(require("react"));
var _utils = require("@gluestack-ui/utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function HStack(Root, Spacer) {
  return /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
    let {
      children,
      reversed,
      space,
      ...props
    } = _ref;
    const getSpacedChildren = children => {
      let childrenArray = _react.default.Children.toArray((0, _utils.flattenChildren)(children));
      childrenArray = reversed ? [...childrenArray].reverse() : childrenArray;
      childrenArray = childrenArray.map((child, index) => {
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
          key: child.key ?? `spaced-child-${index}`
        }, child, index < childrenArray.length - 1 && space &&
        /*#__PURE__*/
        //@ts-ignore
        _react.default.createElement(Spacer, {
          size: space
        }));
      });
      return childrenArray;
    };
    return /*#__PURE__*/_react.default.createElement(Root, _extends({
      ref: ref
    }, props), getSpacedChildren(children));
  });
}
//# sourceMappingURL=HStack.js.map