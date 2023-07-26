"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonGroup = void 0;
var _react = _interopRequireWildcard(require("react"));
var _utils = require("@gluestack-ui/utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ButtonGroup = (StyledButtonGroup, StyledButtonGroupHSpacer, StyledButtonGroupVSpacer) => /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    space,
    direction = 'row',
    isAttached,
    isDisabled,
    children,
    reversed,
    ...props
  } = _ref;
  let computedChildren;
  let childrenArray = _react.default.Children.toArray((0, _utils.flattenChildren)(children));
  childrenArray = reversed ? [...childrenArray].reverse() : childrenArray;
  if (childrenArray) {
    computedChildren = childrenArray.map((child, index) => {
      if (typeof child === 'string' || typeof child === 'number') {
        return child;
      }
      const attachedStyles = {};
      if (index === 0) {
        if (direction === 'column') {
          attachedStyles.borderBottomLeftRadius = 0;
          attachedStyles.borderBottomRightRadius = 0;
        } else {
          attachedStyles.borderTopRightRadius = 0;
          attachedStyles.borderBottomRightRadius = 0;
        }
      } else if (index === (children === null || children === void 0 ? void 0 : children.length) - 1) {
        if (direction === 'column') {
          attachedStyles.borderTopLeftRadius = 0;
          attachedStyles.borderTopRightRadius = 0;
        } else {
          attachedStyles.borderTopLeftRadius = 0;
          attachedStyles.borderBottomLeftRadius = 0;
        }
      } else {
        attachedStyles.borderRadius = 0;
      }
      const childProps = {
        isDisabled,
        ...child.props,
        style: {
          ...(isAttached ? attachedStyles : {}),
          ...child.props.style
        }
      };
      const clonedChild = /*#__PURE__*/_react.default.cloneElement(child, {
        ...childProps
      });
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: child.key ?? `spaced-child-${index}`
      }, clonedChild, index < childrenArray.length - 1 && (direction === 'column' ? /*#__PURE__*/_react.default.createElement(StyledButtonGroupVSpacer, {
        space: !isAttached ? space : 0
      }) : /*#__PURE__*/_react.default.createElement(StyledButtonGroupHSpacer, {
        space: !isAttached ? space : 0
      })));
    });
  }
  if (computedChildren) return /*#__PURE__*/_react.default.createElement(StyledButtonGroup, _extends({
    flexDirection: direction
  }, props, {
    ref: ref
  }), computedChildren);
  return null;
});
exports.ButtonGroup = ButtonGroup;
//# sourceMappingURL=ButtonGroup.js.map