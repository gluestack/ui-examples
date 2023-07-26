"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radio = void 0;
var _react = _interopRequireWildcard(require("react"));
var _focus = require("@react-native-aria/focus");
var _RadioProvider = require("./RadioProvider");
var _radio = require("@react-native-aria/radio");
var _RadioGroupContext = require("./RadioGroupContext");
var _reactNativeAria = require("@gluestack-ui/react-native-aria");
var _utils = require("@gluestack-ui/utils");
var _formControl = require("@gluestack-ui/form-control");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const RadioComponent = /*#__PURE__*/(0, _react.memo)( /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    StyledRadio,
    inputProps,
    combinedProps,
    isChecked: isCheckedProp,
    isDisabled: isDisabledProp,
    isFocusVisible: isFocusVisibleProp,
    isHovered: isHoveredProp,
    isInvalid: isInvalidProp,
    isReadOnly: isReadOnlyProp,
    isIndeterminate: isIndeterminateProp,
    isFocused: isFocusedProp,
    isPressed: isPressedProp,
    _onPress,
    onPressIn,
    onPressOut,
    onHoverIn,
    onHoverOut,
    onFocus,
    onBlur,
    children,
    ...props
  } = _ref;
  const {
    isInvalid,
    isReadOnly,
    isIndeterminate,
    ...restProps
  } = combinedProps;
  const {
    hoverProps,
    isHovered
  } = (0, _reactNativeAria.useHover)();
  const {
    pressableProps,
    isPressed
  } = (0, _reactNativeAria.useIsPressed)();
  const {
    focusProps,
    isFocused
  } = (0, _reactNativeAria.useFocus)();
  const {
    disabled: isDisabled,
    checked: isChecked
  } = inputProps;
  const {
    focusProps: focusRingProps,
    isFocusVisible
  } = (0, _focus.useFocusRing)();
  return /*#__PURE__*/_react.default.createElement(StyledRadio, _extends({
    disabled: isDisabled || isDisabledProp
  }, pressableProps, restProps, inputProps, props, {
    ref: ref,
    accessibilityRole: "radio",
    onPressIn: (0, _utils.composeEventHandlers)(onPressIn, pressableProps.onPressIn),
    onPressOut: (0, _utils.composeEventHandlers)(onPressOut, pressableProps.onPressOut)
    // @ts-ignore - web only
    ,
    onHoverIn: (0, _utils.composeEventHandlers)(onHoverIn, hoverProps.onHoverIn)
    // @ts-ignore - web only
    ,
    onHoverOut: (0, _utils.composeEventHandlers)(onHoverOut, hoverProps.onHoverOut)
    // @ts-ignore - web only
    ,
    onFocus: (0, _utils.composeEventHandlers)((0, _utils.composeEventHandlers)(onFocus, focusProps.onFocus), focusRingProps.onFocus)
    // @ts-ignore - web only
    ,
    onBlur: (0, _utils.composeEventHandlers)((0, _utils.composeEventHandlers)(onBlur, focusProps.onBlur), focusRingProps.onBlur),
    states: {
      readonly: isReadOnly || isReadOnlyProp,
      intermediate: isIndeterminate || isIndeterminateProp,
      checked: isChecked || isCheckedProp,
      focusVisible: isFocusVisible || isFocusVisibleProp,
      disabled: isDisabled || isDisabledProp,
      invalid: isInvalid || isInvalidProp,
      hover: isHovered || isHoveredProp,
      focus: isFocused || isFocusedProp,
      active: isPressed || isPressedProp
    }
  }), /*#__PURE__*/_react.default.createElement(_RadioProvider.RadioProvider, {
    isChecked: isChecked || isCheckedProp,
    isDisabled: isDisabled || isDisabledProp,
    isFocusVisible: isFocused || isFocusVisibleProp,
    isHovered: isHovered || isHoveredProp,
    isInvalid: isInvalid || isInvalidProp,
    isReadOnly: isReadOnly || isReadOnlyProp,
    isIndeterminate: isIndeterminate || isIndeterminateProp,
    isFocused: isFocused || isFocusedProp,
    isPressed: isPressed || isPressedProp
  }, children));
}));
const Radio = StyledRadio => /*#__PURE__*/(0, _react.forwardRef)((_ref2, ref) => {
  var _contextCombinedProps;
  let {
    isFocusVisible: isFocusVisibleProp,
    isHovered: isHoveredProp,
    isIndeterminate: isIndeterminateProp,
    isFocused: isFocusedProp,
    isPressed: isPressedProp,
    isInvalid: isInvalidProp,
    children,
    ...props
  } = _ref2;
  const formControlContext = (0, _formControl.useFormControlContext)();
  const contextState = (0, _RadioGroupContext.useRadioGroup)('RadioGroupContext');
  const combinedProps = {
    ...formControlContext,
    ...contextState,
    ...props
  };
  const inputRef = _react.default.useRef(null);
  const {
    inputProps
  } = (0, _radio.useRadio)({
    ...combinedProps,
    'aria-label': props['aria-label'] ?? props.accessibilityLabel,
    children
  }, contextState.state ?? {}, inputRef);
  const contextCombinedProps = _react.default.useMemo(() => {
    return {
      ...combinedProps
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [(0, _utils.stableHash)(combinedProps)]);
  if (!contextState) {
    console.error('Error: Radio must be wrapped inside a Radio.Group');
  }
  const isInvalid = (contextCombinedProps === null || contextCombinedProps === void 0 ? void 0 : (_contextCombinedProps = contextCombinedProps.state) === null || _contextCombinedProps === void 0 ? void 0 : _contextCombinedProps.validationState) === 'invalid' ? true : false;
  return /*#__PURE__*/_react.default.createElement(RadioComponent, {
    StyledRadio: StyledRadio,
    inputProps: inputProps,
    combinedProps: contextCombinedProps,
    children: children,
    ref: ref,
    isFocusVisible: isFocusVisibleProp,
    isHovered: isHoveredProp,
    isIndeterminate: isIndeterminateProp,
    isFocused: isFocusedProp,
    isPressed: isPressedProp,
    isInvalid: isInvalid || isInvalidProp
  });
});
exports.Radio = Radio;
//# sourceMappingURL=Radio.js.map