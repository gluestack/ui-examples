"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;
var _react = _interopRequireWildcard(require("react"));
var _CheckboxProvider = require("./CheckboxProvider");
var _interactions = require("@react-native-aria/interactions");
var _reactNativeAria = require("@gluestack-ui/react-native-aria");
var _toggle = require("@react-stately/toggle");
var _checkbox = require("@react-native-aria/checkbox");
var _CheckboxGroup = require("./CheckboxGroup");
var _utils = require("@gluestack-ui/utils");
var _formControl = require("@gluestack-ui/form-control");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Checkbox = StyledCheckbox => /*#__PURE__*/(0, _react.forwardRef)((_ref2, ref) => {
  let {
    _onPress,
    onPressIn,
    onPressOut,
    onHoverIn,
    onHoverOut,
    onFocus,
    onBlur,
    children,
    ...props
  } = _ref2;
  const {
    isHovered: isHoveredProp,
    isChecked: isCheckedProp,
    isDisabled: isDisabledProp,
    isInvalid: isInvalidProp,
    isReadOnly: isReadOnlyProp,
    isPressed: isPressedProp,
    isFocused: isFocusedProp,
    isIndeterminate: isIndeterminateProp,
    isFocusVisible
  } = props;
  const formControlContext = (0, _formControl.useFormControlContext)();
  const {
    isInvalid,
    isReadOnly,
    isIndeterminate,
    ...combinedProps
  } = (0, _utils.combineContextAndProps)(formControlContext, props);
  const checkboxGroupContext = (0, _react.useContext)(_CheckboxGroup.CheckboxGroupContext);
  const state = (0, _toggle.useToggleState)({
    ...combinedProps,
    defaultSelected: props.defaultIsChecked,
    isSelected: isCheckedProp
  });
  const _ref = _react.default.useRef(null);
  const mergedRef = (0, _utils.mergeRefs)([ref, _ref]);
  const {
    inputProps: groupItemInputProps
  } = checkboxGroupContext ?
  // eslint-disable-next-line react-hooks/rules-of-hooks
  (0, _checkbox.useCheckboxGroupItem)({
    ...combinedProps,
    'aria-label': combinedProps['aria-label'] ?? combinedProps.accessibilityLabel,
    'value': combinedProps.value
  }, checkboxGroupContext.state,
  //@ts-ignore
  mergedRef) :
  // eslint-disable-next-line react-hooks/rules-of-hooks
  (0, _checkbox.useCheckbox)({
    ...combinedProps,
    'aria-label': combinedProps['aria-label'] ?? combinedProps.accessibilityLabel
  }, state,
  //@ts-ignore
  mergedRef);
  const inputProps = _react.default.useMemo(() => groupItemInputProps,
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [groupItemInputProps.checked, groupItemInputProps.disabled]);
  const contextCombinedProps = _react.default.useMemo(() => {
    return {
      ...checkboxGroupContext,
      ...combinedProps
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [(0, _utils.stableHash)(combinedProps)]);
  const {
    hoverProps,
    isHovered
  } = (0, _interactions.useHover)(isHoveredProp, _ref);
  const {
    pressableProps,
    isPressed
  } = (0, _reactNativeAria.useIsPressed)();
  const {
    focusProps,
    isFocused
  } = (0, _reactNativeAria.useFocus)();
  const {
    checked: isChecked,
    disabled: isDisabled
  } = inputProps;
  return /*#__PURE__*/_react.default.createElement(StyledCheckbox, _extends({
    disabled: isDisabled || isDisabledProp
  }, pressableProps, contextCombinedProps, inputProps, {
    ref: mergedRef,
    accessibilityRole: "checkbox",
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
    onFocus: (0, _utils.composeEventHandlers)((0, _utils.composeEventHandlers)(onFocus, focusProps.onFocus)
    // focusRingProps.onFocu
    )
    // @ts-ignore - web only
    ,
    onBlur: (0, _utils.composeEventHandlers)((0, _utils.composeEventHandlers)(onBlur, focusProps.onBlur)
    // focusRingProps.onBlur
    ),

    states: {
      checked: isChecked || isCheckedProp,
      disabled: isDisabled || isDisabledProp,
      hover: isHovered || isHoveredProp,
      invalid: isInvalid || isInvalidProp,
      readonly: isReadOnly || isReadOnlyProp,
      active: isPressed,
      focus: isFocused,
      indeterminate: isIndeterminate || isIndeterminateProp,
      focusVisible: isFocusVisible
    }
  }), /*#__PURE__*/_react.default.createElement(_CheckboxProvider.CheckboxProvider, {
    isChecked: isChecked || isCheckedProp,
    isDisabled: isDisabled || isDisabledProp,
    isHovered: isHovered || isHoveredProp,
    isInvalid: isInvalid || isInvalidProp,
    isReadOnly: isReadOnly || isReadOnlyProp,
    isPressed: isPressed || isPressedProp,
    isFocused: isFocused || isFocusedProp,
    isIndeterminate: isIndeterminate || isIndeterminateProp,
    isFocusVisible: isFocusVisible
  }, children));
});
exports.Checkbox = Checkbox;
//# sourceMappingURL=Checkbox.js.map