"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextAreaRoot = void 0;
var _react = _interopRequireWildcard(require("react"));
var _TextAreaContext = require("./TextAreaContext");
var _interactions = require("@react-native-aria/interactions");
var _formControl = require("@gluestack-ui/form-control");
var _utils = require("@gluestack-ui/utils");
var _focus = require("@react-native-aria/focus");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const TextAreaRoot = StyledTextAreaRoot => /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    children,
    isDisabled,
    isInvalid,
    isReadOnly,
    isRequired,
    isHovered = false,
    isFocused: isFocusedProp = false,
    isFocusVisible: isFocusVisibleProp,
    ...props
  } = _ref;
  const inputRef = _react.default.useRef();
  const {
    isHovered: isHoveredProp
  } = (0, _interactions.useHover)({}, inputRef);
  const {
    isFocusVisible
  } = (0, _focus.useFocusRing)();
  const [isFocused, setIsFocused] = _react.default.useState(false);
  const handleFocus = (focusState, callback) => {
    setIsFocused(focusState);
    callback();
  };
  const inputProps = (0, _formControl.useFormControlContext)();
  return /*#__PURE__*/_react.default.createElement(StyledTextAreaRoot, _extends({
    states: {
      hover: isHovered ? isHovered : isHoveredProp,
      focus: isFocusedProp ? isFocusedProp : isFocused,
      disabled: isDisabled || inputProps.isDisabled,
      invalid: isInvalid || inputProps.isInvalid,
      readonly: isReadOnly || inputProps.isReadOnly,
      required: isRequired || inputProps.isRequired,
      focusVisible: isFocusVisibleProp || isFocusVisible
    }
  }, props, {
    ref: (0, _utils.mergeRefs)([inputRef, ref])
  }), /*#__PURE__*/_react.default.createElement(_TextAreaContext.TextAreaProvider, {
    isDisabled: isDisabled || inputProps.isDisabled,
    isInvalid: isInvalid || inputProps.isInvalid,
    isFocused: isFocusedProp ? isFocusedProp : isFocused,
    isHovered: isHovered ? isHovered : isHoveredProp,
    isReadOnly: isReadOnly || inputProps.isReadOnly,
    isRequired: isRequired || inputProps.isRequired,
    inputRef: inputRef,
    handleFocus: handleFocus
  }, children));
});
exports.TextAreaRoot = TextAreaRoot;
//# sourceMappingURL=TextAreaRoot.js.map