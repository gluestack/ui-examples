"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionsheetContext = void 0;
exports.ActionsheetItem = ActionsheetItem;
var _focus = require("@react-native-aria/focus");
var _react = _interopRequireWildcard(require("react"));
var _utils = require("@gluestack-ui/utils");
var _interactions = require("@react-native-aria/interactions");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ActionsheetContext = /*#__PURE__*/(0, _react.createContext)({});
exports.ActionsheetContext = ActionsheetContext;
function ActionsheetItem(StyledActionsheetItem) {
  return /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
    var _props$states;
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
      pressProps,
      isPressed
    } = (0, _interactions.usePress)({
      isDisabled
    });
    const {
      isFocused,
      focusProps
    } = (0, _focus.useFocus)();
    const {
      isHovered,
      hoverProps
    } = (0, _interactions.useHover)();
    return /*#__PURE__*/_react.default.createElement(StyledActionsheetItem, _extends({
      ref: ref,
      disabled: isDisabled,
      onPressIn: (0, _utils.composeEventHandlers)(props === null || props === void 0 ? void 0 : props.onPressIn, pressProps.onPressIn),
      onPressOut: (0, _utils.composeEventHandlers)(props === null || props === void 0 ? void 0 : props.onPressOut, pressProps.onPressOut)
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
    }, props, {
      states: {
        hover: isHoveredProp || isHovered,
        focus: isFocusedProp || isFocused,
        // @ts-ignore
        active: isPressedProp || isPressed || (props === null || props === void 0 ? void 0 : (_props$states = props.states) === null || _props$states === void 0 ? void 0 : _props$states.active),
        disabled: isDisabled,
        focusVisible: isFocusVisibleProp || isFocusVisible
      }
    }), children);
  });
}
//# sourceMappingURL=ActionsheetItem.js.map