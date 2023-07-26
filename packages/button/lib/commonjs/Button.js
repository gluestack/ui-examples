"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonContext = exports.Button = void 0;
var _focus = require("@react-native-aria/focus");
var _react = _interopRequireWildcard(require("react"));
var _utils = require("@gluestack-ui/utils");
var _reactNativeAria = require("@gluestack-ui/react-native-aria");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ButtonContext = /*#__PURE__*/(0, _react.createContext)({});
exports.ButtonContext = ButtonContext;
const Button = StyledButton => /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    children,
    isDisabled,
    isHovered: isHoveredProp,
    isPressed: isPressedProp,
    isFocused: isFocusedProp,
    isFocusVisible: isFocusVisibleProp,
    ...props
  } = _ref;
  const {
    isFocusVisible,
    focusProps: focusRingProps
  } = (0, _focus.useFocusRing)();
  const {
    pressableProps,
    isPressed
  } = (0, _reactNativeAria.useIsPressed)();
  const {
    isFocused,
    focusProps
  } = (0, _reactNativeAria.useFocus)();
  const {
    isHovered,
    hoverProps
  } = (0, _reactNativeAria.useHover)();
  return /*#__PURE__*/_react.default.createElement(StyledButton, _extends({
    ref: ref,
    accessibilityRole: (props === null || props === void 0 ? void 0 : props.accessibilityRole) || 'button',
    states: {
      hover: isHoveredProp || isHovered,
      focus: isFocusedProp || isFocused,
      active: isPressedProp || isPressed,
      disabled: isDisabled,
      focusVisible: isFocusVisibleProp || isFocusVisible
    },
    disabled: isDisabled
  }, props, {
    onPressIn: (0, _utils.composeEventHandlers)(props === null || props === void 0 ? void 0 : props.onPressIn, pressableProps.onPressIn),
    onPressOut: (0, _utils.composeEventHandlers)(props === null || props === void 0 ? void 0 : props.onPressOut, pressableProps.onPressOut)
    // @ts-ignore - web only
    ,
    onHoverIn: (0, _utils.composeEventHandlers)(props === null || props === void 0 ? void 0 : props.onHoverIn, hoverProps.onHoverIn)
    // @ts-ignore - web only
    ,
    onHoverOut: (0, _utils.composeEventHandlers)(props === null || props === void 0 ? void 0 : props.onHoverOut, hoverProps.onHoverOut)
    // @ts-ignore - web only
    ,
    onFocus: (0, _utils.composeEventHandlers)((0, _utils.composeEventHandlers)(props === null || props === void 0 ? void 0 : props.onFocus, focusProps.onFocus), focusRingProps.onFocus)
    // @ts-ignore - web only
    ,
    onBlur: (0, _utils.composeEventHandlers)((0, _utils.composeEventHandlers)(props === null || props === void 0 ? void 0 : props.onBlur, focusProps.onBlur), focusRingProps.onBlur)
    // ref={ref}
  }), children);
});
exports.Button = Button;
//# sourceMappingURL=Button.js.map