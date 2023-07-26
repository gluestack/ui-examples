"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.flattenChildren = flattenChildren;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Thanks @gregberge for code and @nandorojo for suggestion.
// Original source: https://github.com/gregberge/react-flatten-children

function flattenChildren(children) {
  let keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  const childrenArray = _react.default.Children.toArray(children);
  return childrenArray.reduce((flatChildren, child, index) => {
    if (child.type === _react.default.Fragment) {
      return flatChildren.concat(flattenChildren(child.props.children, keys.concat(child.key || index)));
    }
    if ( /*#__PURE__*/_react.default.isValidElement(child)) {
      flatChildren.push( /*#__PURE__*/_react.default.cloneElement(child, {
        key: keys.concat(String(child.key || index)).join('.')
      }));
    } else {
      flatChildren.push(child);
    }
    return flatChildren;
  }, []);
}
const getSpacedChildren = (children, space, SpacerComponent) => {
  let childrenArray = _react.default.Children.toArray(flattenChildren(children));
  childrenArray = childrenArray.map((child, index) => {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: child.key ?? `spaced-child-${index}`
    }, child, index < childrenArray.length - 1 && space && /*#__PURE__*/_react.default.createElement(SpacerComponent, {
      size: space
    }));
  });
  return childrenArray;
};
var _default = getSpacedChildren;
exports.default = _default;
//# sourceMappingURL=getSpacedChild.js.map