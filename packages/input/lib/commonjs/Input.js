"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;
var _react = _interopRequireWildcard(require("react"));
var _formControl = require("@gluestack-ui/form-control");
var _InputContext = require("./InputContext");
var _utils = require("@gluestack-ui/utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Input = StyledInput => /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    children,
    onKeyPress,
    type = 'text',
    accessibilityLabel = 'Input Field',
    accessibilityHint,
    accessibilityRole = 'text',
    ...props
  } = _ref;
  const {
    isDisabled,
    isReadOnly,
    isFocused,
    isInvalid,
    setIsFocused,
    isHovered,
    isFocusVisible,
    inputFieldRef,
    isRequired
  } = (0, _InputContext.useInput)('InputContext');
  const inputProps = (0, _formControl.useFormControl)({
    isDisabled: props.isDisabled,
    isInvalid: props.isInvalid,
    isReadOnly: props.isReadOnly,
    isRequired: props.isRequired,
    nativeID: props.nativeID
  });
  const handleFocus = (focusState, callback) => {
    setIsFocused(focusState);
    callback();
  };
  const mergedref = (0, _utils.mergeRefs)([ref, inputFieldRef]);
  return /*#__PURE__*/_react.default.createElement(StyledInput, _extends({}, props, {
    states: {
      focus: isFocused,
      invalid: isInvalid,
      readonly: isReadOnly,
      required: isRequired,
      hover: isHovered,
      focusVisible: isFocusVisible,
      disabled: isDisabled || inputProps.isDisabled
    },
    disabled: isDisabled || inputProps.isDisabled,
    secureTextEntry: type === 'password',
    accessible: true,
    accessibilityLabel: accessibilityLabel,
    accessibilityHint: accessibilityHint,
    accessibilityRole: accessibilityRole,
    accessibilityRequired: isRequired || inputProps.isRequired,
    accessibilityInvalid: isInvalid || inputProps.isInvalid,
    accessibilityState: {
      invalid: isInvalid || inputProps.isInvalid,
      disabled: isDisabled || inputProps.isDisabled,
      selected: isFocused
    },
    accessibilityElementsHidden: isDisabled,
    editable: isDisabled || isReadOnly ? false : true,
    onKeyPress: e => {
      e.persist();
      onKeyPress && onKeyPress(e);
    },
    onFocus: e => {
      handleFocus(true, props !== null && props !== void 0 && props.onFocus ? () => props === null || props === void 0 ? void 0 : props.onFocus(e) : () => {});
    },
    onBlur: e => {
      handleFocus(false, props !== null && props !== void 0 && props.onBlur ? () => props === null || props === void 0 ? void 0 : props.onBlur(e) : () => {});
    },
    ref: mergedref
  }), children);
});
exports.Input = Input;
//# sourceMappingURL=Input.js.map