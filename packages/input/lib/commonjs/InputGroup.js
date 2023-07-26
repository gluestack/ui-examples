"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputGroup = void 0;
var _react = _interopRequireWildcard(require("react"));
var _InputContext = require("./InputContext");
var _interactions = require("@react-native-aria/interactions");
var _formControl = require("@gluestack-ui/form-control");
var _utils = require("@gluestack-ui/utils");
var _focus = require("@react-native-aria/focus");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const InputGroup = StyledInputRoot => /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    children,
    isReadOnly,
    isDisabled,
    isInvalid,
    isRequired,
    isHovered: isHoveredProp,
    isFocused: isFocusedProp,
    isFocusVisible: isFocusVisibleProp,
    ...props
  } = _ref;
  const inputRef = _react.default.useRef();
  const inputFieldRef = _react.default.useRef(null);
  const [isFocused, setIsFocused] = _react.default.useState(false);
  const handleFocus = (focusState, callback) => {
    setIsFocused(focusState);
    callback();
  };
  const inputProps = (0, _formControl.useFormControlContext)();
  const {
    isHovered
  } = (0, _interactions.useHover)({}, inputRef);
  const {
    isFocusVisible
  } = (0, _focus.useFocusRing)();
  const style = {};
  return /*#__PURE__*/_react.default.createElement(StyledInputRoot, _extends({
    states: {
      hover: isHovered ? isHovered : isHoveredProp,
      focus: isFocusedProp ? isFocusedProp : isFocused,
      disabled: isDisabled || inputProps.isDisabled,
      invalid: isInvalid || inputProps.isInvalid,
      readonly: isReadOnly || inputProps.isReadOnly,
      required: isRequired || inputProps.isRequired,
      focusVisible: isFocusVisibleProp || isFocusVisible
    }
  }, props, style, {
    ref: (0, _utils.mergeRefs)([inputRef, ref])
  }), /*#__PURE__*/_react.default.createElement(_InputContext.InputProvider, {
    isDisabled: isDisabled || inputProps.isDisabled,
    isInvalid: isInvalid || inputProps.isInvalid,
    isHovered: isHovered ? isHovered : isHoveredProp,
    isFocused: isFocusedProp ? isFocusedProp : isFocused,
    isFocusVisible: isFocusVisibleProp || isFocusVisible,
    isReadOnly: isReadOnly || inputProps.isReadOnly,
    isRequired: isRequired || inputProps.isRequired,
    inputRef: inputRef,
    handleFocus: handleFocus,
    setIsFocused: setIsFocused,
    inputFieldRef: inputFieldRef
  }, children));
});
exports.InputGroup = InputGroup;
//# sourceMappingURL=InputGroup.js.map