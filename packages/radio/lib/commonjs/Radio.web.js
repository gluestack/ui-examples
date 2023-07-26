"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radio = void 0;
var _react = _interopRequireWildcard(require("react"));
var _RadioProvider = require("./RadioProvider");
var _visuallyHidden = require("@react-aria/visually-hidden");
var _focus = require("@react-native-aria/focus");
var _interactions = require("@react-native-aria/interactions");
var _radio = require("@react-native-aria/radio");
var _RadioGroupContext = require("./RadioGroupContext");
var _utils = require("@gluestack-ui/utils");
var _formControl = require("@gluestack-ui/form-control");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* eslint-disable @typescript-eslint/no-unused-vars */
const RadioComponent = /*#__PURE__*/(0, _react.memo)( /*#__PURE__*/(0, _react.forwardRef)((_ref2, ref) => {
  let {
    StyledRadio,
    inputProps,
    inputRef,
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
    children,
    ...props
  } = _ref2;
  const {
    isInvalid,
    isReadOnly,
    isIndeterminate,
    ...restProps
  } = combinedProps;
  const {
    disabled: isDisabled,
    checked: isChecked
  } = inputProps;
  const _ref = _react.default.useRef(null);
  const {
    isHovered
  } = (0, _interactions.useHover)({}, _ref);
  const {
    focusProps,
    isFocusVisible
  } = (0, _focus.useFocusRing)();
  const [isFocused, setFocused] = _react.default.useState(isFocusedProp);
  const [isPressed, setPressed] = _react.default.useState(isPressedProp);
  const handleFocus = () => {
    setFocused(true);
  };
  const handleBlur = () => {
    isFocusedProp ? setFocused(true) : setFocused(false);
  };
  const handlePressIn = () => {
    setPressed(true);
  };
  const handlePressOut = () => {
    isPressedProp ? setPressed(true) : setPressed(false);
  };
  return /*#__PURE__*/_react.default.createElement(StyledRadio, _extends({}, props, restProps, {
    accessibilityRole: "label",
    ref: _ref,
    onMouseDown: handlePressIn,
    onMouseUp: handlePressOut,
    states: {
      readonly: isReadOnly,
      intermediate: isIndeterminate,
      checked: isChecked,
      focusVisible: isFocusVisible,
      disabled: isDisabled,
      invalid: isInvalid,
      hover: isHovered
    }
  }), /*#__PURE__*/_react.default.createElement(_RadioProvider.RadioProvider, {
    isChecked: isChecked || isCheckedProp,
    isDisabled: isDisabled || isDisabledProp,
    isFocusVisible: isFocusVisible || isFocusVisibleProp,
    isHovered: isHovered || isHoveredProp,
    isInvalid: isInvalid || isInvalidProp,
    isReadOnly: isReadOnly || isReadOnlyProp,
    isIndeterminate: isIndeterminate || isIndeterminateProp,
    isFocused: isFocused || isFocusedProp,
    isPressed: isPressed || isPressedProp
  }, /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, null, /*#__PURE__*/_react.default.createElement("input", _extends({}, inputProps, focusProps, {
    ref: ref,
    onFocus: ((0, _utils.composeEventHandlers)(handleFocus), focusProps.onFocus),
    onBlur: ((0, _utils.composeEventHandlers)(handleBlur), focusProps.onBlur)
  }))), children));
}));
const Radio = StyledRadio => /*#__PURE__*/(0, _react.forwardRef)((_ref3, ref) => {
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
  } = _ref3;
  const formControlContext = (0, _formControl.useFormControlContext)();
  const contextState = (0, _RadioGroupContext.useRadioGroup)('RadioGroupContext');
  const combinedProps = {
    ...formControlContext,
    ...contextState,
    ...props
  };
  const inputRef = _react.default.useRef(null);
  const radioState = (0, _radio.useRadio)({
    ...combinedProps,
    'aria-label': props['aria-label'] ?? props.accessibilityLabel,
    children
  }, contextState.state ?? {}, inputRef);
  const inputProps = _react.default.useMemo(() => radioState.inputProps,
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [radioState.inputProps.checked, radioState.inputProps.disabled]);
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
//# sourceMappingURL=Radio.web.js.map